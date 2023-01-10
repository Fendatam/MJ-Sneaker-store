import React from 'react'
import Link from 'next/link'

import { urlFor } from '../lib/client'

const FooterBanner = ({ footerBanner: { discount, largeText1, largeText2, saleTime, smallText, product, buttonText, image, desc, midText } }) => {
    return (
        <div className='footer-banner-container max-md:h-[1000px]'>
            <div className="flex justify-between max-md:flex-col max-md:justify-center max-md:items-center">
                <div className="">
                    <p className=' mb-5'>{discount}</p>
                    <h3 className=' text-7xl font-semibold'>{largeText1}</h3>
                    <h3 className=' text-7xl font-semibold'>{largeText2}</h3>
                    <p className=' mt-5'>{saleTime}</p>
                </div>
                <div>
                    <img src={urlFor(image)} alt={smallText} className="relative bottom-48 h-[600px] max-md:h-[300px] max-md:bottom-0" />
                </div>
                <div className="">
                    <p className=' mb-5 max-md:text-center'>{smallText}</p>
                    <h3 className=' text-7xl font-semibold max-md:text-center'>{midText}</h3>
                    <p className=' mt-5 max-md:text-center'>{desc}</p>
                    <Link href='/product/nike-infinity-pro-2'>
                        <button type='button' className='mt-4 bg-white rounded-md text-[#f02d34] py-3 px-6 text-center font-semibold max-md:ml-24'>{buttonText}</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default FooterBanner