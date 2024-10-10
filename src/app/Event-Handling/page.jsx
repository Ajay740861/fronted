'use client';
import React from 'react'

const EventHandling = () => {
    return (
        <div className="w-[80%] mx-auto">

            <h1 className="text-center my-5 font-bold text=3xl">Event Handling</h1>

            <button className="bg-black text-white p-3"
                onClick={() => { alert('button was clicked') }}

            >Clicked Event</button>

            <input type="text"
            onChange={() => { console.log('something changed');}}
            className="border rounded p-3 mt-4 w-full" />
        </div>
    )
}

export default EventHandling