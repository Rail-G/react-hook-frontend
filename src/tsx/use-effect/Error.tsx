export function Error({onClick}: {onClick: () => void}) {
    return(
        <div className="error-block">
            <div className="error-text">
                <p>Произошла ошибка. Повторите запрос.</p>
            </div>
            <button onClick={onClick} className="error-btn">Обновить</button>
        </div>
    )
}