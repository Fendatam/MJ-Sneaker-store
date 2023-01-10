import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { BsFillEmojiDizzyFill } from 'react-icons/bs'



const Cancel = () => {

    return (
        <div className='success-wrapper'>
            <div className='success'>
                <p className='text-black text-5xl'>
                    <BsFillEmojiDizzyFill />
                </p>
                <h2>Did Something wrong happen?</h2>
                <p className='email-msg'>The payment was cancelled.</p>
                <p className='description'>Please repeat the purchase and make sure the information entered is valid

                </p>
                <Link href='/'>
                    <button className='btn' type='button' width="300px">Go back to home page</button>
                </Link>
            </div>
        </div>
    )
}

export default Cancel