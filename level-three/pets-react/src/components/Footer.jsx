import React from "react"
import logo from "../images/Companion.png"

export default function Footer() {
    return (
        <div>
            <div className="footer-logo">
            <img src={logo} alt="logo" />
        </div>
         <p className="footer-credit">ⓒ Companion 2023</p>
        </div>
    )
}