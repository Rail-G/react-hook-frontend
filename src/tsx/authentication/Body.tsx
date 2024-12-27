import { useContext, useEffect } from "react";
import { NewsList } from "./NewsList";
import { getRequestWithToken } from "./utils/requests";
import { Context } from "./context/Context";

export function Body () {
    const contextNews = useContext(Context)
    const profile = contextNews!.profile
    const token = contextNews!.token!
    const setNewsList = contextNews!.setNewsList
    useEffect(() => {
        const newsReguest = async () => {
            await getRequestWithToken(import.meta.env.VITE_PRIVATE_NEWS_URL, token).then(
                (resolve) => {
                    setNewsList(resolve)
                }
            )
        }
        if (token) {
            newsReguest()
        }
    }, [profile, token, setNewsList])
    return (
        <div className="body">
            {contextNews!.newsList.length === 0
            ? <div className="default-page">
                <h3>Neto Social</h3>
                <p>Facebook and VK Killer</p>
            </div>
            : <NewsList newsList={contextNews!.newsList} />}
        </div>
    )
}