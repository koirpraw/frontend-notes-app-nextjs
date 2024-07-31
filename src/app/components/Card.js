import React from 'react'
import { PiStarFill } from 'react-icons/pi';

function Card({ title, description, created_at, difficulty, likeColor, iconSize }) {
    const date = new Date(created_at);
    const createdAtStamp = date.toLocaleString();
    return (
        <div className=' h-[300px] p-8 m-1 bg-white shadow-md hover:shadow-lg rounded-xl flex flex-col justify-between '>
            <div className='flex justify-between items-stretch' >
                <PiStarFill color={likeColor} size={iconSize} title='Like' />
                <p className='text-sm font-light'>Difficulty Level:{difficulty}</p>
            </div>

            <div className='flex flex-col justify-center items-start'>
                <h4 className='text-xl font-semibold'>{title}</h4>
                <p className='text-md text-break text-ellipsis'>{description}</p>
            </div>

            <div className='flex justify-center'>
                <p className='text-sm font-light'>Created At:{createdAtStamp}</p>
            </div>

        </div>
    )
}

export default Card