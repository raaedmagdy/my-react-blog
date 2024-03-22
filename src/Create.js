import React, { useState } from "react";

function Create() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [submittedBlog, setSubmittedBlog] = useState(null);

  function handleSubmit(e) {
    const blog = { title, body };
    e.preventDefault();
    setIsLoading(false);
    setTitle("");
    setBody("");
    console.log(blog);
    setSubmittedBlog(blog);
  }

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog Body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>

        {!isLoading && <button className="btn btn-warning">Add Blog</button>}
        {isLoading && <button className="btn btn-warning">Adding...</button>}
      </form>
      {submittedBlog && (
        <div>
          <h2>Blog title: {submittedBlog.title}</h2>
          <p className="lead">Blog Body: {submittedBlog.body}</p>
        </div>
      )}
    </div>
  );
}

export default Create;
