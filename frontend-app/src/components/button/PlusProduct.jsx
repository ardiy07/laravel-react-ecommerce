import React from 'react'
import PlusDisabled from '../icon/PlusDisabled'
import Plus from '../icon/Plus'

function PlusProduct({ onClick, disabled }) {
    return (
        <button className={`flex items-center ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`} onClick={onClick} disabled={disabled}>
            {disabled ? <PlusDisabled /> : <Plus />}
        </button>
    )
}

export default PlusProduct
