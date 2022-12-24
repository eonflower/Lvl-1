import React from "react";
import BlogNavbar from "./Navbar";

export default function Header() {
    return (
        <div className="blog-header">
            <BlogNavbar />
            <div className="title-container">
                <h1 className="header-title">Clean Blog</h1>
                <h3 className="header-subTitle">A Blog Theme by Start Bootstrap</h3>
            </div>
            
        </div>
    )
}