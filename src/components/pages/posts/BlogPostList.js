import React from "react";
import BlogPost from "./BlogPost";
import blogPosts from "./markdown/blogPosts";

function BlogPostList() {
  return (
    <div>
      {blogPosts.map((post, index) => (
        <BlogPost key={index} content={post} />
      ))}
    </div>
  );
}

export default BlogPostList;
