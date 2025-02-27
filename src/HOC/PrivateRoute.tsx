import { FC, useEffect } from 'react'
import Cookies from 'js-cookie'
import { Outlet, useNavigate } from "react-router-dom"
import { getUserData } from "../services/auth"
import { userStore } from "../store/userStore"

const PrivateRoute:FC = () => {
    
    let access_token = Cookies.get('access_token')
    const navigate = useNavigate()
    const { setUser } = userStore(state => state)
    
    const { data } = getUserData()
    
    
    useEffect(() => {
        if(data) {
            setUser(data)
        }
    }, [data])
    
    
    useEffect(() => {
        if(!access_token) {
            navigate('/login')
        }
    }, [access_token])
    
  return <Outlet/>
}

export default PrivateRoute