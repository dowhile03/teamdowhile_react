import React from "react";
import BlogMain from "./BlogMain";

const ARTICLES = [
  { 
    id: "b1",
    title: "blog1",
    description:
      "this is a dummy description of the blog posts ...this is a dummy post",
    name: "kartikey",
    date: "2020-01-24",
  },
  {
    id: "b2",
    title: "blog2",
    description:
      "this is a dummy description of the blog posts ...this is a dummy post",
    name: "vipul",
    date: "2020-01-24",
  },
  {
    id: "b3",
    title: "blog3",
    description:
      "this is a dummy description of the blog posts ...this is a dummy post",
    name: "paras",
    date: "2020-01-24",
  },
  {
    id: "b4",
    title: "blog4",
    description:
      "this is a dummy description of the blog posts ...this is a dummy post",
    name: "teamdowhile",
    date: "2020-01-24",
  },
  {
    id: "b4",
    title: "blog4",
    description:
      "this is a dummy description of the blog posts ...this is a dummy post",
    name: "teamdowhile",
    date: "2020-01-24",
  },
];

const BlogDetails = () => {
  return <div>
  <BlogMain articles = {ARTICLES}/>
  </div>;
};

export default BlogDetails;
