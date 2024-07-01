import React from 'react'

function Input(props) {
    return (
        <div className="flex flex-col w-full">
            <label className='text-sm pb-1 font-bold text-gray-500 tracking-tight'>{props.label}</label>
            <input
                className='w-full tracking-tight font-semibold px-2 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-600'
                type={props.type || 'text'}
                value={props.value || ''}
                onChange={props.onChange}
                placeholder={props.placeholder || ''}
                name={props.name || ''}
                id={props.id || ''}
                autoComplete={props.autoComplete || 'off'}
                required
            />
        </div>
    )
}

export default Input