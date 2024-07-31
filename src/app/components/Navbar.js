import React from 'react'
import Link from 'next/link'

function Navbar() {
    return (
        <div className='flex flex-col justify-center items-start w-full h-auto p-6 border-white-solid bg-slate-50 '>
            <div className='w-full flex justify-between items-center '>
                <Link href="/"><h1 className='text-2xl'>Notes App</h1></Link>
                {/* <Link href="/createCardPage"><h1>Create Note</h1></Link> */}


            </div>

            {/* <div className='w-full flex justify-end items-start '>
                <Link href="/"><h1>Create</h1></Link>
            </div> */}




        </div>

    )
}

export default Navbar