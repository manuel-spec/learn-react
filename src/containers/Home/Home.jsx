import React from 'react'

const Home = () => {

    const handleClick = () => {
        console.log("hey")
    }
    return (
        <div className='flex justify-center'>
            <h1 className='text-3xl'>Home</h1>
            <button className='border py-3 px-2' onClick={handleClick}>click me</button>
        </div>
    )
}

export default Home
