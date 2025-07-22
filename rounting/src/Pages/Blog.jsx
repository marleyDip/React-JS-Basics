import React from "react";
import Header from "../common/Header";
import { blogs } from "../Data/blogs";
import { Link } from "react-router-dom";

export default function Blog() {
  let allBlogs = blogs.map((v, i) => {
    return (
      <div className="blogItems">
        <h3>{v.title}</h3>

        <p>{v.body}</p>

        <button>
          <Link to={`/blog/${v.id}`}> Read More </Link>
        </button>
      </div>
    );
  });
  return (
    <>
      <Header />
      <h1>Blog Page</h1>

      <div className="container">{allBlogs}</div>
    </>
  );
}
