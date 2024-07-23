import React from 'react'

function LinkPageInfo({page, onClick, title}) {
    return (
        <li onClick={onClick} className={`font-bold py-3 ${page === title ? "text-green-500 border-b-2 border-green-500" : "text-gray-400 border-b"}`}>
            {title}
        </li>
    )
}

export default LinkPageInfo