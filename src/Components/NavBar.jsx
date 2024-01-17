import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className='border p-4 text-center'>
            <Link to="/" className='p-3 text-slate-800'>Home</Link>
            <Link to="/about" className='p-3 text-slate-800'>About</Link>
        </div>
    )
}

export default NavBar
