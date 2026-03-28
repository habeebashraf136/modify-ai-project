import axios from 'axios'

const api = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    withCredentials: true
}) 

export const getSong = async ({mood}) => {
    try{
        const response = await api.get('/api/songs?mood=' + mood)
        return response.data
    }catch(err){
        return err.response?.data || { message: "Network error or server is down" }
    }
}



