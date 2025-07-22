import React from "react";
import Header from "../common/Header";
import { useLocation } from "react-router-dom";
import { blogs } from "../Data/blogs";

export default function BlogDetails() {
  let uselocation = useLocation();
  //console.log(uselocation.pathname.split("/")[2]);

  let currentId = uselocation.pathname.split("/")[2];

  let currentData = blogs.filter((v) => v.id == currentId)[0];

  console.log(currentData);
  return (
    <div>
      <Header />

      <h1>{currentData.title}</h1>

      <h4 className='blogDetail'>{currentData.body}</h4>
    </div>
  );
}
