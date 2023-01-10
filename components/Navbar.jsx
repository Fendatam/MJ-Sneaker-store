import React from 'react'
import { AiOutlineShopping } from 'react-icons/ai'
import Link from 'next/link'
import { useState } from 'react'
import { useStateContext } from '../context/StateContext'
import Cart from './Cart'

const Navbar = () => {
    const { showCart, setShowCart, totalQuantities } = useStateContext();

    return (
        <div className='flex justify-between py-4'>
            <div className=''>
                <Link href="/"><h1 className=' font-semibold text-2xl'>MJ</h1></Link>
            </div>
            <button type='button' className='cart-icon' onClick={() => setShowCart(true)}>
                <AiOutlineShopping />
                <div className='rounded-[50%] bg-[#f02d34] text-[12px] w-[18px] h-[18px] absolute top-2 right-[-8px] text-white'>{totalQuantities}</div>
            </button>

            {showCart && <Cart />}
        </div>
    )
}

export default Navbar