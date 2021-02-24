import React from 'react'
import Typical from 'react-typical'
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
            <h3 id="navigation"><a href="">About/</a><a href="">Experiences/</a><a href="">Projects/</a><a href="">Contact</a></h3>
        </div>
    )
}
