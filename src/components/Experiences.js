import React from 'react'
import {Paper} from '@material-ui/core'
export default function Experiences() {
    return (
        <div className="experience">
        <h1 id="experiencetitle">Experiences</h1>
        <hr id="experiencedivider"></hr>
        <div className="card-wrapper">
        <section id="projectonecard">
        <Paper elevation={3} className="card">
        <h1> 
            <img src="Crest-1.png" id="smuscrest"></img> Education 
        </h1>
        <p> smus smus  smus smus
        </p>
        </Paper>
        </section>
        <section id="projectonecard">
        <Paper elevation={3} className="card">
            <h1>
                <i class="fas fa-hands-helping" id="helpingicon"></i>Work/Volunteer
                </h1>
        </Paper>
        </section>
        <section id="projectonecard">
        <Paper elevation={3} className="card">
            <h1>Programming</h1>
        </Paper>
        </section>
        </div>
        </div>
    )
}
