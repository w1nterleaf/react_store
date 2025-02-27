import { createBrowserRouter, createHashRouter } from 'react-router-dom'
import PrivateRoute from "../HOC/PrivateRoute"
import PublicRoute from "../HOC/PublicRoute"
import Cart from "../pages/Cart"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Product from "../pages/Product"
import Profile from "../pages/Profile"
import Register from "../pages/Register"


export const router = createHashRouter([
    { 
        path: '/', 
        element: <PrivateRoute/>,
        children: [
            {
                index: true,
                element: <Home/>
            }
        ]
    },
    { 
        path: '/login', 
        element: <PublicRoute/>,
        children: [
            { 
                index: true,
                element: <Login/>
            }
        ] 
    },
    { 
        path: '/register', 
        element: <PublicRoute/>,
        children: [
            { 
                index: true,
                element: <Register/>
            }
        ] 
    },
    { 
        path: '/cart', 
        element: <PrivateRoute/>,
        children: [
            {
                index: true,
                element: <Cart/>
            }
        ]
    },
    { 
        path: '/profile', 
        element: <PrivateRoute/>,
        children: [
            {
                index: true,
                element: <Profile/>
            }
        ]
    },
    { 
        path: '/product/:id', 
        element: <PrivateRoute/>,
        children: [
            {
                index: true,
                element: <Product/>
            }
        ]
    },
])