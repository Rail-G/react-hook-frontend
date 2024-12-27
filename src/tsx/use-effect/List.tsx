import React, { useState } from "react"

export function List({items, setId}: {items: ListItem[], setId: React.Dispatch<React.SetStateAction<number | null>>}) {
    const [lastClick, setLastClick] = useState<Element | null>(null)
    const onClick = (e: React.MouseEvent, id: number) => {
        if (lastClick !== null) {
            lastClick.classList.remove('active')
        }
        setLastClick(e.currentTarget)
        e.currentTarget.classList.add('active')
        setId(id)
    }
    return (
        <div className="profile-list">
        <ul>
            {items.map((el: ListItem) => (
                <li key={el.id} onClick={(e) => onClick(e, el.id)}>
                    <a href="#">{el.name}</a>
                </li>
            ))}
        </ul>
    </div>
    )
}