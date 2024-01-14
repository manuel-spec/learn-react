import React, { useState } from 'react'


const Home = () => {
    const [text, setText] = useState('')

    const handleClick = () => {
        setText("Bitch don't Touch me")
    }
    return (
        <div className='flex flex-col justify-center '>
            <h1 className='text-3xl'>Home</h1>
            <h1 className='p-4 text-red-500 text-4xl'>{text}</h1>
            <button className='border py-3 px-2' onClick={handleClick}>click me</button>
        </div>
    )
}

export default Home
