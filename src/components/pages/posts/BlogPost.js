import React from "react";
import ReactMarkdown from "react-markdown";

function BlogPost({ content }) {
  return (
    <div>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}

export default BlogPost;
