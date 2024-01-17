import React from 'react'
import NavBar from '../Components/NavBar'
import CardOne from '../Components/CardOne'

const Home = () => {
    const page = "Home"
    return (
        <div>
            <NavBar />
            <CardOne page={page} />
        </div>
    )
}

export default Home
