
import React from 'react'

import DetailCard from '../components/DetailCard';

function CardDetailPage({ searchParams }) {

    return (
        <div className='flex min-h-screen flex-col items-center justify-evenly p-24'>
            <h1 className='text-2xl font-medium'> {searchParams.title}</h1>
            <DetailCard
                id={searchParams.id}
                title={searchParams.title}
                description={searchParams.description}
                created_at={searchParams.created_at}
                difficulty={searchParams.difficulty}
                is_liked={searchParams.is_liked} />
        </div>
    )

}

export default CardDetailPage