import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import photo from "./profile.png"
import "../App.css"

export default function Info() {
    return (
        <div className="info">
            <img className="pfp" src={photo} />
            <h2 className='name'>Laura Smith</h2>
            <h3 className='title'>Frontend Developer</h3>
            <p className='website'>laurasmith.website</p>
            <button className="email"><FontAwesomeIcon className="envelope" icon={faEnvelope} />Email</button>
        </div>
    )
}

