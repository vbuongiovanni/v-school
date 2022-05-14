import React from "react";



export default function BlogPost(props) {
    const {title, subTitle, author, date} = props;

    return (
        <div className="blog-post">
            <h2 className="blog-post--title">{title}</h2>
            <h3 className="blog-post--subtitle">{subTitle}</h3>
            <p className="blog-post--description">
                Posted by <span className="blog-post--author">{author}</span> on <span className="blog-post--date">{date}</span>
            </p>
        </div>
    )
}
