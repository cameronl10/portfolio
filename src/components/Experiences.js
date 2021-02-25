import React from 'react'
import {Paper} from '@material-ui/core'
export default function Experiences() {
    return (
        <div className="experience">
        <h1 id="experiencetitle">Experiences</h1>
        <hr id="experiencedivider"></hr>
        <div className="card-wrapper">
        <Paper elevation={3} className="card">
            <h1>Education</h1>
        </Paper>
        <Paper elevation={3} className="card">
            <h1>Work/Volunteer</h1>
        </Paper>
        <Paper elevation={3} className="card">
            <h1>Programming</h1>
        </Paper>
        </div>
        </div>
    )
}
