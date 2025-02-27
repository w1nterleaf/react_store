import { FC, useEffect } from 'react'
import Cookies from 'js-cookie'
import { Outlet, useNavigate } from "react-router-dom"

const PublicRoute:FC = () => {
    let access_token = Cookies.get('access_token')
    const navigate = useNavigate()
    
    useEffect(() => {
        if(access_token) {
            navigate('/')
        }
    }, [access_token])
    
    return <Outlet/>
}

export default PublicRoute