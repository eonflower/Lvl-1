import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Footer() {
    return (
        <div className="icons">
            <FontAwesomeIcon icon="fa-brands fa-square-twitter" />
            <FontAwesomeIcon icon="fa-brands fa-square-facebook" />
            <FontAwesomeIcon icon="fa-brands fa-square-instagram" />
            <FontAwesomeIcon icon="fa-brands fa-linkedin" />
            <FontAwesomeIcon icon="fa-brands fa-square-github" />
        </div>
    )
}