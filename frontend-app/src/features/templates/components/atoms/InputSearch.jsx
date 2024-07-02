import React from 'react'

function InputSearch(props) {
    return (
        <input
            className="text-gray-600 py-2 px-10 w-full border border-gray-300 rounded-lg focus:ring-1 focus:ring-green-500 focus:outline-none"
            type="text"
            placeholder={props.placeholder || ''}
            value={props.value || ''}
            onChange={props.onChange}
            onFocus={props.onFocus}
            onBlur={props.onBlur}
        />
    )
}

export default InputSearch
