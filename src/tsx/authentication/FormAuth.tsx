import React, { useState } from "react"
import { getRequestWithToken, postRequest } from "./utils/requests"

export function FormAuth({setProfile, setNewsList}: FormType) {
    const [value, setValue] = useState({login: '', password: ''})
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setValue((prev) => ({...prev, [e.target.name]: e.target.value}))
    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const token = await postRequest(import.meta.env.VITE_AUTH, value).then(
            (resolve) => {
                localStorage.setItem('token', resolve.token)
                return resolve.token
            },
            (reject) => {
                console.error('Error', reject)
            }
        )
        if (typeof token == 'string') {
            await getRequestWithToken(import.meta.env.VITE_PRIVATE_PROFILE_URL, token).then(
                (resolve) => {
                    localStorage.setItem('profile', JSON.stringify(resolve))
                    setProfile(JSON.stringify(resolve))
                },
                (reject) => {
                    console.error('Error', reject)
                }
            )
            await getRequestWithToken(import.meta.env.VITE_PRIVATE_NEWS_URL, token).then(
                (resolve) => {
                    setNewsList(resolve)
                }
            )
        }
    }
    return (
        <form onSubmit={onSubmit} className="auth-form">
            <input onChange={onChange} type="text" placeholder="login" name='login' />
            <input onChange={onChange} type="password" placeholder="password" name='password'/>
            <button className="header-button auth">Login</button>
        </form>
    )
}