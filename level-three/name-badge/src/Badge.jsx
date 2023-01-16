import React, {useState} from "react";


export default function Badge(props) {

    return (
        <div className="badge-card">
            <div className={`left ${props.leftColor}`}></div>
            <div className={`right ${props.rightColor}`}></div>
            <div className="triangle pink"></div>
            <div className="dots"></div>
            <div className="badge-info">
            <span className="badge-name-span"><p className="name">{props.firstName} {props.lastName} </p><p className="pronouns">{props.pronouns}</p></span>
            <p className="job-title">{props.jobTitle}</p>
            <hr />
                <p className="phone">{props.phoneNumber}</p>
                <p className="email">{props.email}</p>
                <p className="bio">{props.bio}</p>
            </div>
            
            
        </div>
    )
}