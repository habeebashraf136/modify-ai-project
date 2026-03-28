import axios from "axios"

const api = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    withCredentials: true
})
// console.log(import.meta.env.VITE_BACKEND_URL)

export async function register({ email, password, username }) {
    try{
        const response = await api.post("/api/auth/register", {
        email, password, username
    })
    return response.data
    }catch(err){
        throw err.response?.data || { message: "Network error or server is down" }
    }
}

export async function login({ email, username, password }) {
    try {
        const response = await api.post("/api/auth/login", {
            email, username, password
        })
        return response.data
    } catch(err) {
        throw err.response?.data || { message: "Network error or server is down" }
    }
}


export async function getMe() {
    try{
        const response = await api.get("/api/auth/get-me")
        return response.data
    }catch(err){
        throw err.response?.data || { message: "Network error or server is down" }
    }
}

export async function logout() {
    try{
        const response = await api.get("/api/auth/logout")
        return response.data
    }catch(err){
        throw err.response?.data || { message: "Network error or server is down" }
    }
}