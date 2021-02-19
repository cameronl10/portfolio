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
        loop={2}
        wrapper="p"
             />
            </div>
            <div className="icons">
                <a id="instaicon" href="https://www.instagram.com/cameron.l1/" target="_blank">
                 <i class="fab fa-instagram"></i>
                </a>
                <a id="githubicon" href="https://github.com/cameronl10" target="_blank">
                    <i class="fab fa-github"></i>
                </a>
            </div>
        </div>
    )
}
