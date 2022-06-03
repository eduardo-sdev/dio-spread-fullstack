import React from 'react'

export function Btn({title, onClick}) {
    return (
        <button onClick={onClick}>{title}</button>
    )
}

