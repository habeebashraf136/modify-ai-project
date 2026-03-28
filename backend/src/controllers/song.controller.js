const songModel = require('../models/song.model');
const storageService = require('../services/storage.service');
const id3 = require('node-id3');



async function uploadSong(req,res) {
    const songbuffer = req.file.buffer;
    // console.log(req.file);
    const { mood } = req.body;

    const tags = id3.read(songbuffer);
    // console.log(tags);

    const [songfile,postfile] = await Promise.all([
        storageService.uploadfile({
            buffer: songbuffer,
            filename: tags.title + '.mp3',
            folder: '/cohort-2/moodify/songs'
        }),
        storageService.uploadfile({
            buffer: tags.image.imageBuffer,
            filename: tags.title + '.jpg',
            folder: '/cohort-2/moodify/posters'
        })
    ])

    const song = await songModel.create({
        url:songfile.url,
        postUrl:postfile.url,
        title:tags.title,
        mood
    })

    res.status(201).json({
        message:'Song uploaded successfully',
        song
    })

}

async function getSong(req,res){
    const { mood } = req.query;

    if(!mood){
        return res.status(400).json({
            message:'Mood is required'
        })
    }
    
    const song = await songModel.findOne({
        mood
    })

    res.status(200).json({
        message:'Song fetched successfully',
        song
    })
}

async function getAllSong(req,res){
    const {mood} = req.query;

    if(!mood){
        return res.status(400).json({
            message:'Mood is required'
        })
    }

    const songs = await songModel.find({
        mood
    })

    res.status(200).json({
        message:'Songs fetched successfully',
        songs
    })
}



module.exports = {
    uploadSong,
    getSong,
    getAllSong
}