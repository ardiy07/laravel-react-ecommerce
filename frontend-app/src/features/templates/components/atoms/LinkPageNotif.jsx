import React from 'react'

function LinkPageNotif(props) {
    return (
        <li onClick={props.onClick} className={`font-bold py-3 ${props.currentPage === props.title ? "text-green-500 border-b-2 border-green-500" : "border-b"}`}>
            {props.title}
        </li>
    )
}

export default LinkPageNotif
