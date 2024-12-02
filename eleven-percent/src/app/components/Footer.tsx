import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div className='shadow-inner bg-[#d2af85] p-5 px-7  font-bold   w-full  flex items-center justify-between text-lg'>
            <p>© 2024 Eleven Percent Project. All rights reserved.</p>
            <Link href={"https://github.com/CaziahDevs"}
                className='hover:underline transition ease-in-out text-2xl '>
                Caziah Mayers
            </Link>
        </div>
    )
}

export default Footer