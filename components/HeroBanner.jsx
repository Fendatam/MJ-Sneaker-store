import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client'

const HeroBanner = ({ heroBanner }) => {
    return (

        <div className=' hero-banner-container'>
            <div>
                <p className='beats-solo'>{heroBanner.smallText}</p>
                <h3 className=''>{heroBanner.midText}</h3>
                <h1 className=''>{heroBanner.largeText1}</h1>
                <div className=' flex '>
                    <img src={urlFor(heroBanner.image)} alt="nike-shoes" className=' absolute max-md:right-0 top-0 max-md:top-24 max-md:w-[400px] max-md:h-[350px] w-[600px] h-[500px] right-[10%]' />
                </div>
                <div>
                    <div className="max-md:pt-[7.5rem]">
                    <Link href='/product/nike-infinity-pro-2'>
                            <button type='button' className=' max-md:top-28'>{heroBanner.buttonText}</button>
                    </Link>
                    </div>
                    <div className='desc'>
                        <h5>{heroBanner.discount}</h5>
                        <p>{heroBanner.desc}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroBanner