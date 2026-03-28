import { getSong } from "../services/song.api";
import { useContext } from "react";
import { SongContext } from "../song.context";


export const useSong = () => {
    const context = useContext(SongContext)

    const { loading, setLoading, song, setSong } = context

    async function handleGetSong({ mood }) {
        setLoading(true)
        try {
            const data = await getSong({ mood })
            if (data.song) {
                setSong(data.song)
            } else {
                setSong(null)
                // You could add a toast or alert here if no song is found
                console.log("No song found for mood:", mood)
            }
        } catch (error) {
            console.error("Error fetching song:", error)
            setSong(null)
        } finally {
            setLoading(false)
        }
    }

    return ({ loading, song, handleGetSong })

}