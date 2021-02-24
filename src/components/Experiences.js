import React from 'react'
export default function Experiences() {
    return (
        <div className="experiencecontainer">
            <div className="experienceCenter">
                <h1>My Projects</h1>
                <hr id="experiencedivider"></hr>
            </div>
           <div className="experiencecard">
               <div className ="projectcard">
                   <h2 id="projecttitle">Robotics</h2>
                    <p id="projecttext">
                        project one
                    </p>
               </div>
               <div className="projectcard">
                   <h2 id="projecttitle">This website</h2>
                   <p id="projecttext">
                       project two
                   </p>
               </div>
               <div className="projectcard">
                   <h2 id="projecttitle">project three title</h2>
                   <p id="projecttext">
                       project three
                   </p>
               </div>
           </div>
        </div>
    )
}
