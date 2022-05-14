import React from "react";
import data from "./data";
import BlogPost from "./BlogPost";

export default function BlogList() {
    const blogPosts = data.map(entry => {
        return (
            <BlogPost 
                key={entry.id}
                {...entry}
            />
        )
    }) 

    return (
        <main className="main--container">
            <div className="main--content">
                <div className="main--list-container">
                    {blogPosts}
                </div>
                <div className="older-posts-container">
                    <span className="older-posts-button">Older Posts →</span>
                </div>
            </div>
        </main>
    )
}
