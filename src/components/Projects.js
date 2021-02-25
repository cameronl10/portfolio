import React from 'react'
import {Paper} from '@material-ui/core'

export default function Projects() {
    return (
        <div className="projectPage" id="projects">
             <div>
            <h1 id="experiencetitle">Projects</h1>
            <hr id="experiencedivider"></hr>
            <div className="card-wrapper">
            <section id="projectonecard">
            <Paper elevation={3} square={false} className="card">
            <h1>hello</h1>
            </Paper>
            </section>
            <section id="projectonecard">
            <Paper elevation={3} className="card">
            <h1>hello</h1>
            </Paper>
            </section>
            <section id="projectonecard">
            <Paper elevation={3} className="card">
            <h1>hello</h1>
            </Paper>
            </section>
            
        </div>
        </div>
        </div>
    )
}
