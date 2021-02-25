import React from 'react'

export default function Contact() {
    return (
        <div className="footer" id="footer">
            <h2 id="footertext">Contact me at these places!</h2>
            <div className="icons">
                <a rel="noreferrer" id="instaicon" href="https://www.linkedin.com/in/cameron-lee-0506891b3/" target="_blank">
                 <i class="fab fa-linkedin"></i>
                </a>
                <a rel="noreferrer" id="githubicon" href="https://github.com/cameronl10" target="_blank">
                    <i class="fab fa-github"></i>
                </a>
                <a rel="noreferrer" id="emailicon" href="mailto:EMAILADDRESS" target="_blank">
                    <i class="fas fa-envelope"></i>
                </a>
            <h2 id="footertextbottom">Made by Cameron Lee 2021</h2>
            </div>
        </div>
    )
}
