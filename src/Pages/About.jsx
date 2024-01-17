import React from 'react'
import NavBar from '../Components/NavBar'
import CardOne from '../Components/CardOne'

const About = () => {
    const page = "About"
    return (
        <div>
            <NavBar />
            <CardOne page={page} />
        </div>
    )
}

export default About
