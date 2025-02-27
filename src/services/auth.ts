import api from "./api";
import { useMutation, useQuery  } from '@tanstack/react-query'
import { ILogin, IRegister } from "../types";
import Cookie from 'js-cookie'


export const getUserData = () => {
    let access_token = Cookie.get('access_token')
    return useQuery(['user'], () => api.get('auth/users/profile', {
        headers: {
            'Authorization': `Bearer ${access_token}`
        }
    }), {
        select: ({data}) => data 
    })
}

export const registerUser = () => {
    return useMutation((data:IRegister) => api.post('auth/register', data))
}

export const loginUser = () => {
    return useMutation((data:ILogin) => api.post('auth/login', data), {
        onSuccess: ({ data }) => {
            if(data && data.access) {
                Cookie.set('access_token', data.access, { expires: 8})
                Cookie.set('refresh_token', data.refresh, { expires: 8})
            }
        }
    } )
}