import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";


export default function Footer() {
    return (
        <div className="blog-footer">
            <hr />
            <div className="icon-div">
                <a href="#"><FontAwesomeIcon icon={faTwitter} className="icons" /></a>
                <a href="#"><FontAwesomeIcon icon={faFacebook} className="icons" /></a>
                <a href="#"><FontAwesomeIcon icon={faGithub} className="icons" /></a>
            </div>
            <p className="copyright">Copyright © Your Website 2022</p>
            
        </div>
    )
}