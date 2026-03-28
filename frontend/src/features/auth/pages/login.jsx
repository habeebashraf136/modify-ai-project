import '../style/login.scss'
import React, { useState } from 'react'
import FormGroup from '../components/FormGroup'
import { Link } from 'react-router'
import { useAuth } from '../hooks/useAuth'
import { useNavigate } from 'react-router'


const login = () => {

    const { loading, handleLogin } = useAuth()

    const navigate = useNavigate()

    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")

    async function handleSubmit(e) {
        e.preventDefault()
       try {
        if(!email || !password){
            alert("Please enter email and password")
            return  // ← yeh bhi add kar
        }
        const res = await handleLogin({ email, password })
        console.log(res.message)
        alert(res.message)
        navigate("/home")
    } catch(err) {
        // alert(err.message || "Login failed")
    }  
    }


  return (
     <main className="login-page">
            <div className="form-container">
                <h1>Login</h1>
                <form onSubmit={handleSubmit} >
                    <FormGroup
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        label="Email"
                        placeholder="Enter your email"
                    />
                    <FormGroup
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        label="Password"
                        placeholder="Enter your password"
                    />
                    <button className='button' type="submit">Login</button>
                </form>
                <p>Don't have an account? <Link to="/register">Register here</Link></p>
            </div>
        </main>
  )
}

export default login
