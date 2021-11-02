import React from "react";
import CardImage from '../../Asset/blogCardImage.png';
import "./Blog.css";

function BlogCard({ header, body, authorName, date, onClick, id }) {
  return (
    <>
      <div className="card" onClick={() => onClick(id)}>
        <div className="card-text">
          <h3>{header}</h3>
          <p>{body}</p>
          <div className="blog-info">
              <h6>{authorName}</h6>
              <p>{date}</p>
          </div>
        </div>
        <img src={CardImage} className="card-image" alt="Blog image" />
      </div>
    </>
  );
}

export default BlogCard;