import {createBrowserRouter} from 'react-router'
import Login from './features/auth/pages/login'
import Register from './features/auth/pages/register'
import FirstPages from './features/auth/pages/firstpages'
import Home from './features/home/pages/home'
import Protected from './features/auth/components/Protected'


export const router = createBrowserRouter([
    {
        path: '/home',
        element: <Protected><Home/></Protected>
    },
    {
        path: '/login',
        element: <Login />  
    },
    {
        path: '/register',
        element: <Register />  
    },{
        path: '/',
        element: <FirstPages />
    }
])


