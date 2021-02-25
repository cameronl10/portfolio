import React from 'react'
import Typical from 'react-typical'
import Navbar from './navbar';
export default function Intro() {
    return (
        <div className="intropage">
            <div className="introwriting">
            <h1>Cameron Lee</h1>
            <hr id="introdivider"></hr>
            <Typical
        steps={['Interactive', 1000, 'Interactive Portfolio', 500]}
        loop={1}
        wrapper="h1"
             />
            </div>
            <Navbar/>
        </div>
    )
}
