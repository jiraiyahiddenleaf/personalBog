import React from 'react'
import "../../posts/posts.scss";
import { Link } from "react-router-dom";
import { TbArrowNarrowRight } from "react-icons/tb";

const postTitle3 = () => {
  return (
    <div className="posts">
      <Link className="link" to={`/blog/1`}>
        <div className="post">
          <a className="title" href="#">
            <h2>BTC Warp: Don't Sync, Verify</h2>
          </a>
          <h4>
            A succinct, verifiable proof of Bitcoin block headers to solve light
            node syncing
          </h4>
          <Link className="readMore" to={`/blog/1`}>
            <h4 className="readmore">Read more</h4>
            <div className="arrow_icon">
              <TbArrowNarrowRight />
            </div>
          </Link>
          <h5 className="date">May 19, 2023</h5>
        </div>
      </Link>
    </div>
  )
}

export default postTitle3
