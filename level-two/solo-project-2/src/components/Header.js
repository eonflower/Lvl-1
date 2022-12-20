import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMountainSun } from "@fortawesome/free-solid-svg-icons";
import "./Header.css"

export default function Header() {
    return (
        <div className="header">
           <FontAwesomeIcon icon={faMountainSun} className="globe" />
           <h1 className="title">my trail log</h1>
        </div>
    )
}