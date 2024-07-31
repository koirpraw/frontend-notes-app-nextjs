'use client'

import React from 'react'
import Card from '@/app/components/Card'
import { useState, useEffect } from 'react'
import Link from 'next/link';

function CardsList() {

    const [notes, setNotes] = useState([]);

    const fetchNotes = async () => {
        try {
            const res = await fetch("http://localhost:4000/api/notes");
            if (!res.ok) {
                throw new Error(`HTTP Error: status${res.status}`)
            }
            const result = await res.json();
            console.log(result);
            setNotes(result);

        } catch (error) {
            console.error('Error fetching data on client side', error)
            throw (error)

        }

    }

    useEffect(() => {
        fetchNotes()
    }, [])

    return (
        <div className="w-3/4 h-full grid grid-cols-3 gap-4 my-8 ">
            {notes && notes.map((card) => (
                <li key={card.id} className='list-none'>

                    <Link href={{
                        pathname: "/editCardPage",
                        query: { id: card.id, title: card.title, description: card.description, created_at: card.created_at, difficulty: card.difficulty, is_liked: card.is_liked }
                    }}>
                        <Card
                            title={card.title}
                            description={card.description}
                            created_at={card.created_at}
                            likeColor={card.is_liked === true ? '#facc15' : '#d9d9d9'}
                            iconSize={36}
                            difficulty={card.difficulty}

                        />
                    </Link>





                </li>
            ))}

        </div>
    )
}

export default CardsList