import React, { useState } from "react";
import "./home.scss";
import "./main.css";
import Posts from "../posts/posts";
import BlogPostList from "../posts/BlogPostList";

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleModeChange = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? "dark-mode" : ""}>
      <div className="home">
        <input
          type="checkbox"
          className="checkbox"
          id="checkbox"
          checked={isDarkMode}
          onChange={handleModeChange}
        />
        <label htmlFor="checkbox" className="checkbox-label">
          <i className="fas fa-moon"></i>
          <i className="fas fa-sun"></i>
          <span className="ball"></span>
        </label>
        <BlogPostList />
        <Posts />
      </div>
    </div>
  );
};

export default Home;
