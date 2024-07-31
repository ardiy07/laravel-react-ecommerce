import React from 'react'

function Location({ className = 'unf-icon', width = 18, height = 18, fill = 'var(--color-icon-enabled, #2E3137)', style = {} }) {
    return (
        <>
            <svg
                className={className}
                viewBox="0 0 24 24"
                width={width}
                height={height}
                fill={fill}
                style={{ display: 'inline-block', verticalAlign: 'middle', ...style }}
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.02 2.809A7.67 7.67 0 0 1 12 2.24 7.67 7.67 0 0 1 19.75 10c0 7.264-6.896 11.372-7.365 11.65a.81.81 0 0 1-.755.01l-.015-.01C11.146 21.373 4.25 17.265 4.25 10a7.67 7.67 0 0 1 4.77-7.191ZM5.75 10c0 5.58 4.85 9.18 6.25 10.11 1.4-.93 6.25-4.55 6.25-10.11A6.188 6.188 0 0 0 12 3.74 6.19 6.19 0 0 0 5.75 10Zm4.168-3.129A3.75 3.75 0 0 1 12 6.24 3.76 3.76 0 0 1 15.75 10a3.75 3.75 0 1 1-5.832-3.129Zm.83 4.99a2.25 2.25 0 1 0 2.503-3.74 2.25 2.25 0 0 0-2.502 3.74Z"
                />
            </svg>
        </>
    )
}

export default Location