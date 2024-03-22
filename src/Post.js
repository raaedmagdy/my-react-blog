import React, { useEffect, useState } from "react";
import { useParams  } from "react-router-dom";

function Post() {
  const [post, setPost] = useState({});
  const[isLoading, setLoading]= useState(true)
  const[error, setError]= useState(null)
  let { postId } = useParams();

  useEffect(() => {
    let api = "https://jsonplaceholder.org/posts/";
    fetch(api + postId)
      .then((res) => res.json())
      .then((post) => {
        setPost(post)
        setLoading(false)
        setError(null)
      });
  }, [postId]);

  return (
    <div className="container text-center">
      {isLoading && <div className="loading">Loading...</div>}
      {error && <div className="error">{error}</div>}
      <h1>Post {post.id}</h1>
      <h2>{post.title}</h2>
    </div>
  );
}

export default Post;
