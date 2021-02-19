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
            <div className="icons">
                <a rel="noreferrer" id="instaicon" href="https://www.instagram.com/cameron.l1/" target="_blank">
                 <i class="fab fa-instagram"></i>
                </a>
                <a rel="noreferrer" id="githubicon" href="https://github.com/cameronl10" target="_blank">
                    <i class="fab fa-github"></i>
                </a>
            </div>
        </div>
    )
}