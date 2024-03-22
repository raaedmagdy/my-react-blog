import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function BlogList() {
  const [posts, setPosts] = useState([true]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const url = "https://jsonplaceholder.org/posts";
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error("Couldn't connect to the server");
          }
          return res.json();
        })
        .then((data) => {
          setPosts(data);
          setIsLoading(false);
          setError(null);
        })
        .catch((error) => {
          setIsLoading(false);
          setError(error.message);
        });
    }, 1000);
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
          <h1 className="mb-5 text-primary">Blog Posts</h1>
        </div>
        {error && <div className="text-center">{error}</div>}
        {isLoading && <div className="loading text-center">Loading...</div>}
        {posts.map((post) => {
          return (
            <div className="card col-3" key={post.id}>
              <img src={post.image} className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">{post.id}</h5>
                <p className="card-text">{post.title}</p>
                <Link className="btn btn-warning" to={`/post/${post.id}`}>
                  See More
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BlogList;
