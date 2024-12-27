import { useState } from "react"
import { useJsonFetch } from "../../hooks/useFetch"
import { Error } from "./Error"

export function TestPage({url}: {url: string}) {
    const [update, setUpdate] = useState<boolean>(false)
    const [data, loading, error] = useJsonFetch<{status: string}>({url: url, updateOpts: {update, setUpdate}})
    const onClick = () => setUpdate(true)
    return (
        <div className="page-data">
            {loading && <div className="profile-load">Loading...</div>}
            {(data && !error) && <p>{data?.status}</p>}
            {error && <Error onClick={onClick} />}
        </div>
    )
}