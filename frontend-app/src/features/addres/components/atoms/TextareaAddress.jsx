import React, { useState } from 'react';

function TextareaAddress({ name, value, onChange, label, maxLength, required }) {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <div className="relative mt-6">
            <textarea
                id={name}
                className={`border rounded-lg py-3 px-3 w-full focus:outline-none ${value.length <= 0 && required ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-green-500'}`}
                value={value || ''}
                name={name || ''}
                onChange={onChange}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                maxLength={maxLength}
                required={required || true}
            />
            <label
                className={`absolute left-0 transform transition-all duration-200 ease-in-out pointer-events-none ${value.length > 0 || isFocused ? '-translate-y-4 scale-90 top-1 left-2.5 bg-white' : 'top-2 left-4'} text-gray-500`}
                htmlFor={name}
            >
                {label}
            </label>
            <div className="flex justify-between w-full px-1 mt-1">
                {value === '' && required && <span className="text-sm text-red-500 w-full">Wajib diisi</span>}
                <span className="text-sm text-gray-400 w-full text-end">{value.length}/{maxLength}</span>
            </div>
        </div>
    );
}

export default TextareaAddress;
