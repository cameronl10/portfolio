import React from 'react'

export default function Home() {
    return (
        <div className="homepage">
            <div className="homewriting">
            <h1 id="aboutmeid">About Me</h1>
            <hr id="experiencedivider"></hr>
            <p id="aboutmep">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            </div>
            <div className="experience">
            <h1 id="experiencetitle">Experiences</h1>
            <hr id="experiencedivider"></hr>
            <div className="projectcard">
                <div className="experiencesection">
                <h2>Education </h2>
                <p>
                <img src="Crest-1.png" id="smuscrest"></img> I am currently enrolled in Saint Michaels University School
                </p>
                </div>
            </div>
            <div className="projectcard">
                <h2>Work Experience</h2>
                <p>I have worked</p>
            </div>
            <div className="projectcard">
                <h2>Volunteering</h2>
                <p>I have volunteered</p>
            </div>
            </div>
            
        </div>
       
    )
}
