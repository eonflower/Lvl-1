import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSquareFacebook, faSquareInstagram, faTwitterSquare} from "@fortawesome/free-brands-svg-icons"
import {faLinkedin} from "@fortawesome/free-brands-svg-icons"
import {faSquareGithub} from "@fortawesome/free-brands-svg-icons"
import "../App.css"

export default function Footer() {
    return (
        <div className="icons">
            <FontAwesomeIcon className="fa-brands" icon={faTwitterSquare} />
            <FontAwesomeIcon className="fa-brands" icon={faSquareFacebook} />
            <FontAwesomeIcon className="fa-brands" icon={faSquareInstagram} />
            <FontAwesomeIcon className="fa-brands" icon={faLinkedin} />
            <FontAwesomeIcon className="fa-brands" icon={faSquareGithub} />
        </div>
    )
}