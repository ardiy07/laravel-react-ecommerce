import React from 'react'

function Ekspedisi({ className = 'unf-icon', width = 20, height = 20, fill = 'var(--color-icon-enabled, #2E3137)', style = {} }) {
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
                <path d="m21.07 10.94-2.41-2.75a2.73 2.73 0 0 0-2.07-.94h-2.84V7A2.75 2.75 0 0 0 11 4.25H4A1.76 1.76 0 0 0 2.25 6v10A2.75 2.75 0 0 0 5 18.75h.53a1.9 1.9 0 0 0 0 .25 2 2 0 0 0 4 0 1.9 1.9 0 0 0 0-.25h5.06a1.896 1.896 0 0 0 0 .25 2 2 0 0 0 4 0 1.896 1.896 0 0 0 0-.25H20A1.76 1.76 0 0 0 21.75 17v-4.25a2.75 2.75 0 0 0-.68-1.81ZM3.75 16V6A.25.25 0 0 1 4 5.75h7A1.25 1.25 0 0 1 12.25 7v10.25H5A1.25 1.25 0 0 1 3.75 16Zm16.5 1a.25.25 0 0 1-.25.25h-6.25v-8.5h2.84a1.24 1.24 0 0 1 .94.43l.94 1.07H17a.76.76 0 0 0-.75.75v1a.76.76 0 0 0 .75.75h3.25V17Z" />
            </svg>
        </>
    )
}

export default Ekspedisi