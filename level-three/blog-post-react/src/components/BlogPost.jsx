import React from "react";

export default function BlogPost(props) {

    return (
        <div className="blog-post">
            <a href="https://startbootstrap.github.io/startbootstrap-clean-blog/post.html">
                <h1 className="blog-title">{props.title}</h1>
                <h3 className="blog-subTitle">{props.subTitle}</h3>
            </a>
            <p className="blog-credit">Posted by <a href="#">{props.author}</a> on {props.date}</p>
            <hr className="blog-break" />
        </div>
    )
}