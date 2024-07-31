import React, { useState } from 'react';

function InputAddress({ name, type, value, onChange, maxLength, label, required, note }) {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <div className="relative mt-6">
            <input
                type={type || 'text'}
                className={`border rounded-lg py-2 px-3 w-full focus:outline-none ${value === '' && required ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-green-500'}`}
                value={value || ''}
                maxLength={maxLength}
                name={name || ''}
                onChange={onChange}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                required={required || true}
            />
            <label
                className={`absolute left-0 transform transition-all duration-200 ease-in-out pointer-events-none ${value.length > 0 || isFocused ? '-translate-y-4 scale-90 top-1 left-2.5 bg-white' : 'top-2 left-4'} text-gray-500`}
                htmlFor={name}
            >
                {label}
            </label>
            <div className="flex justify-between w-full px-1 mt-1">
                {!required && <span className="text-sm text-gray-400 w-full">{note}</span>}
                {value === '' && required && <span className="text-sm text-red-500 w-full">Wajib diisi</span>}
                <span className="text-sm text-gray-400 w-full text-end">{value.length}/{maxLength}</span>
            </div>
        </div>
    );
}

export default InputAddress;
