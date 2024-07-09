import React, { useState } from 'react'

function Dropdown({ data, selectedOption, onOptionChange, label }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleOptionClick = (option) => {
        onOptionChange(option.value);
        setIsOpen(false);
    };

    const selectedLabel = data.find(option => option.value === selectedOption)?.label || 'Nominal';
    return (
        <div className="flex flex-col w-full">
            <label className='text-sm pb-1 font-bold text-gray-500 tracking-tight'>{label}</label>
            <div className="relative inline-block w-full">
                <div
                    className={`w-full px-3 py-2 border border-gray-300 rounded-md font-semibold text-sm focus:outline-none cursor-pointer flex justify-between items-center ${isOpen ? 'ring-1 ring-green-600' : ''} ${selectedOption ? "text-black" : "text-gray-400"}`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {selectedLabel}
                    <i className={`icon-down transform duration-300 ${isOpen ? 'rotate-180' : ''}`}></i>
                </div>
                {isOpen && (
                    <div className="absolute mt-1 w-full border rounded-md shadow-lg bg-white z-10 max-h-30 overflow-y-auto">
                        <ul className="max-h-60 rounded-md py-1 ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none text-base font-normal">
                            {data.map((option) => (
                                <li
                                    key={option.value}
                                    className={`cursor-pointer select-none relative py-2 pl-3 pr-9 px-2 mx-2 rounded-md ${option.disabled
                                        ? 'text-gray-400 cursor-not-allowed tracking-tight'
                                        : 'text-gray-900 hover:bg-gray-100'
                                        }`}
                                    onClick={() => !option.disabled && handleOptionClick(option)}
                                >
                                    <span className="block truncate">{option.label}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Dropdown