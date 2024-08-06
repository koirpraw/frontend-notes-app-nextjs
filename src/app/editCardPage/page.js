'use client'
// import { useParams } from 'next/navigation';
import React from 'react'
import { useState, useEffect } from 'react'


function EditCardPage({ searchParams }) {

    const [note, setNote] = useState({
        id: '',
        title: '',
        description: '',
        created_at: '',
        difficulty: '',
        is_liked: ''
    });

    // const fetchNote = async () => {
    //     try {
    //         const res = await fetch(`http://localhost:4000/api/notes/${searchParams.id}`);
    //         if (!res.ok) {
    //             throw new Error(`HTTP Error: status${res.status}`)
    //         }
    //         const result = await res.json();
    //         console.log(result);
    //         setNote(result);

    //     } catch (error) {
    //         console.error('Error fetching data on client side', error)
    //         throw (error)

    //     }

    // }

    // useEffect(() => {
    //     fetchNote();
    // }, [searchParams.id]);

    // useEffect(() => {
    //     console.log(`title: ${note.title} description: ${note.description}`);
    // }, [note]);

    return (
        <div className='flex min-h-screen flex-col items-center justify-evenly p-24'>
            <h1 className='text-2xl font-medium'>  Edit Card Page</h1>
            <div className='p-8 shadow-md w-1/2 h-[500px]'>

                <p>Id: {searchParams.id}</p>
                <p>title: {searchParams.title}</p>
                <p>description: {searchParams.description}</p>
                <p>created_at: {searchParams.created_at}</p>
                <p>difficulty: {searchParams.difficulty}</p>
                <p>is_liked: {searchParams.is_liked}</p>
            </div>


        </div>
    )

}

export default EditCardPage