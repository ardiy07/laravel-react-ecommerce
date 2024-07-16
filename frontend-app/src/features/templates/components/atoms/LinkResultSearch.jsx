import React from 'react'
import { Link } from 'react-router-dom'

function LinkResultSearch({ query, name, search }) {
    const truncateName = (name) => {
        const index = name.toLowerCase().indexOf(search.toLowerCase());
        if (index !== -1) {
            return (
                name.substring(0, index) +
                name.substring(index, index + search.length) +
                '<b>' +
                name.substring(index + search.length) +
                '</b>' 
            );
        }
        return name;
    };

    return (
        <Link to={`/search?query=${encodeURIComponent(query)}`} className='text-right hover:bg-gray-100 rounded-lg'>
            <p className="py-2 rounded-md hover:bg-gray-100 flex items-center">
                <i className='icon-search'></i>
                <span className='pl-3 text-gray-600 line-clamp-1 tracking-tight' dangerouslySetInnerHTML={{ __html: truncateName(name) }} />
            </p>
        </Link>
    );
}

export default LinkResultSearch
