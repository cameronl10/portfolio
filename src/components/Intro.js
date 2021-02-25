import React from 'react'
import Typical from 'react-typical'
import{
    Router,
    Link
} from "react-router-dom";

export default function Intro() {
    return (
        <Router>
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
            <h3 id="navigation"><Link to="/Home">About</Link>/Experiences/Projects/Contact</h3>
        </div>
        </Router>
    )
}
