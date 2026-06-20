import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider, useNavigate } from 'react-router-dom';
import Body from './components/Body.jsx';
import Error from './components/Error.jsx';
import Profile from './components/Profile.jsx';
import Signup from "./components/Signup.jsx";
import Login from './components/Login.jsx';
import TokenContext from './uitils/UserContext.jsx';
import { useContext } from 'react';


const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <App />,
        errorElement : <Error />,
        children : [
            
            {
                path : "/home",
                element: <Body />
            },
            {
                path : "/signup",
                element: <Signup />
            },
            {
                path : "/login",
                element: <Login />
            },
            {
                path : "/profile",
                element: <Profile />
            }
        ],
        
    },
])

createRoot(document.getElementById('root')).render(<RouterProvider router={appRouter}/>)
