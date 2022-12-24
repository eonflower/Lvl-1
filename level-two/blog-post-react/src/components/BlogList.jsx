import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import data from "../data.jsx"
import BlogPost from "./BlogPost";
// import "./src/App.css"

export default function BlogList() {
    const BlogCard = data.map(post => {
        return <><BlogPost
                    key={post.id}
                    {...post}
                    />
        </>
    })

    return (
        <div className="blog-list">
            {BlogCard}
            <div className="post-button">
            <a href="#" className="older-posts">OLDER POSTS<FontAwesomeIcon icon={faArrowRightLong} /></a>
            </div>
        </div>
    )
}