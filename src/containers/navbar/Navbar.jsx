import React from 'react'

const Navbar = () => {
    return (
        <div className='p-3 flex justify-around border'>
            <div className=''>
                <h2 className='text-3xl text-red-700'>TheDojo Blog</h2>
            </div>

            <div className='p-2'>
                <a href="" className="p-4">Home</a>
                <a href="" className="p-4">new Blog</a>

            </div>

        </div>
    )
}

export default Navbar
