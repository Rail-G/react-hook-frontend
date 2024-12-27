import { useState } from "react"
import { useJsonFetch } from "../../hooks/useFetch"
import { Error } from "./Error"

export function Details({id}: {id: number}) {
    const [update, setUpdate] = useState<boolean>(false)
    const [data, loading, error] = useJsonFetch<DetailUser>({url: `${import.meta.env.VITE_USEEFFECT_LIST_URL}/${id}.json`, updateOpts: {update, setUpdate}})
    const onClick = () => setUpdate(true)
    return (
        <>
            {loading && <div className="profile-load">Loading...</div>}
            {!error && <div className="profile-detail">
                <img src={data && data.avatar ? data.avatar : ''}  alt="" />
                <div className="profile-info">
                    <h3>{data?.name}</h3>
                    <ul className="details">
                        <li>City: {data?.details.city}</li>
                        <li>Company: {data?.details.company}</li>
                        <li>Position: {data?.details.position}</li>
                    </ul>
                </div>
            </div>}
            {error && <Error onClick={onClick} />}
        </>
    )
}