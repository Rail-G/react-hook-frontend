import { News } from "./News";

export function NewsList({newsList}: {newsList: NewsType[] | null}) {
    return (
        <div className="news-list">
            <ul>
                {newsList!.map((el: NewsType) => (
                    <li key={el.id}><News news={el}/></li>
                ))}
            </ul>
        </div>
    )
}