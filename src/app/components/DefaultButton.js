import React from 'react'
import Link from "next/link";

function DefaultButton({ title, bgColor, textColor }) {
    return (
        <div className={`w-1/12 h-[60px] ${bgColor} flex flex-col justify-center items-center rounded-lg hover:shadow-2xl`}>
            <Link href="/createCardPage" className={`text-lg ${textColor} font-medium `}>{title}</Link>
        </div>
    )
}

export default DefaultButton