export function News({news}: {news: NewsType}) {
    return (
        <div className="news">
            <img src={news.image} alt="" />
            <div className="news-body">
                <h3>{news.title}</h3>
                <p>{news.content}</p>
            </div>
        </div>
    )
}