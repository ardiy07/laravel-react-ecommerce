import React from 'react'

function LinkPage(props) {
    return (
        <li onClick={props.onClick} className={`font-semibold text-base tracking-tight py-3 ${props.currentPage === props.title ? "text-green-500 border-b-2 border-green-500" : "border-b text-gray-500"}`}>
            {props.title}
        </li>
    )
}

export default LinkPage
