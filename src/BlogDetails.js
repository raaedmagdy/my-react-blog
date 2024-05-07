import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function BlogDetails() {
  const [blogs, setBlogs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  function handleClick() {
    fetch("http://localhost:8000/blogs/" + blogs.id, {
      method: "DELETE",
    }).then(() => {
      navigate("/");
    });
  }

  useEffect(() => {
    const url = "http://localhost:8000/blogs/";
    setTimeout(() => {
      fetch(url + id)
        .then((res) => {
          if (!res.ok) {
            throw Error("Couldn't connect to the server");
          }
          return res.json();
        })
        .then((data) => {
          setBlogs(data);
          setIsLoading(false);
          setError(null);
        })
        .catch((error) => {
          setIsLoading(false);
          setError(error.message);
        });
    }, 1000);
  }, [id]);
  return (
    <div className="container home text-center">
      {isLoading && <div className="loading">Loading....</div>}
      {error && <div className="text-center">{error}</div>}
      {blogs && (
        <div className="blog-details">
          <h2>{blogs.title}</h2>
          <p>{blogs.author}</p>
          <div>{blogs.body}</div>
          <button className="btn btn-primary mt-5" onClick={handleClick}>
            Delete Blog
          </button>
        </div>
      )}
    </div>
  );
}

export default BlogDetails;
