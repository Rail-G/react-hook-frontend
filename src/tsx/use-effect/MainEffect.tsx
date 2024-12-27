import { useState } from "react"
import { useJsonFetch } from "../../hooks/useFetch"
import { List } from "./List"
import { Details } from "./Details"
import { Error } from "./Error"

export function MainEffect() {
    const [id, setId] = useState<number | null>(null)
    const [update, setUpdate] = useState<boolean>(false)
    const [data, loading, error] = useJsonFetch<ListItem[]>({url: `${import.meta.env.VITE_USEEFFECT_LIST_URL}/users.json`, updateOpts: {update, setUpdate}})
    const onClick = () => setUpdate(true)
    return (
        <div className="profile-block">
            {loading && <div className="profile-load">Loading...</div>}
            {(data && !error) && <List items={data} setId={setId}/>}
            {((id !== null) && !error) && <Details id={id}/>}
            {error && <Error onClick={onClick} />}
        </div>
    )
}