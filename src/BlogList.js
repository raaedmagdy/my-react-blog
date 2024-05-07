import React from "react";
import { Link } from "react-router-dom";

function BlogList({ blogs, title, handleDelete }) {
  return (
    <div>
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
          </Link>
          <button
            className="btn btn-warning"
            onClick={() => handleDelete(blog.id)}
          >
            Delete Blog
          </button>
        </div>
      ))}
    </div>
  );
}

export default BlogList;
