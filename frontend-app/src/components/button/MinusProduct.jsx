import React from 'react'

import MinusDisabled from '../icon/MinusDisabled'
import Minus from '../icon/Minus'

function MinusProduct({onClick, disabled}) {
    return (
        <button className={`flex items-center ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`} onClick={onClick} disabled={disabled}>
            {disabled ? <MinusDisabled /> : <Minus />}
        </button>
    )
}

export default MinusProduct
