import { useState } from "react";
import { Body } from "./Body";
import { Header } from "./Header";
import { Context } from "./context/Context";



export function MainPage () {
    const [newsList, setNewsList] = useState<NewsType[] | []>([])
    const [profile, setProfile] = useState<string | null>(localStorage.getItem('profile'))
    const [token, setToken] = useState<string | null>(localStorage.getItem('token'))
    return (
        <Context.Provider value={{newsList, setNewsList, profile, setProfile, token, setToken}}>
            <Header />
            <Body />
        </Context.Provider>
    )
}