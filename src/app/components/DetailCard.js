import React from 'react'

function DetailCard({ id, title, description, created_at, difficulty, is_liked }) {
    return (
        <div className='p-8 shadow-md w-1/2 h-[500px]'>

            <p>Id: {id}</p>
            <p>title: {title}</p>
            <p>description: {description}</p>
            <p>created_at: {created_at}</p>
            <p>difficulty: {difficulty}</p>
            <p>is_liked: {is_liked}</p>
        </div>
    )
}

export default DetailCard