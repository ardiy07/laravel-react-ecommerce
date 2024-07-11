import React from 'react'
import { MinusProduct, PlusProduct } from '../../../../components'

function Quantity({ value,onChange, maxOrder }) {
    const handleIncrement = () => {
        onChange(value + 1);
    };

    const handleDecrement = () => {
        onChange(value - 1);
    };

    return (
        <div className='border rounded-md flex items-center px-2 py-[0.15rem] border-green-500'>
            <MinusProduct onClick={handleDecrement} disabled={value < 2}/>
            <input
                type="number"
                className="w-10 text-center focus:outline-none"
                value={value}
                onChange={(e) => onChange(parseInt(e.target.value) || 1)}
                max={maxOrder}
            />
            <PlusProduct onClick={handleIncrement} disabled={value >= maxOrder}/>
        </div>
        
    )
}

export default Quantity
