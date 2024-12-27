import { useContext } from "react"
import { Context } from "./context/Context"

export function Profile({profile}:{profile: Profile | null}) {
    const contextStates = useContext(Context)
    const onClick = () => {
        contextStates!.setNewsList([])
        contextStates!.setProfile(null)
        contextStates!.setToken(null)
        localStorage.removeItem('profile')
        localStorage.removeItem('token')
    }
    return (
        <div className="profile">
            <h3>{`Hello ${profile!.name} !`}</h3>
            <img src="#" alt="" />
            <button onClick={onClick} className="header-button logout">Logout</button>
        </div>
    )
}