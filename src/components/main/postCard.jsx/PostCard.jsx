import "./PostCard.css";

function PostCard() {
  return (
    <a className="post-card">
      <div className="post__img-wrap">
        <img src="./news-img-1.jpg" alt="Post image" />
      </div>
      <div className="details">
        <div className="details__post-status">
          <p className="details__post-cat">Case studies</p>
          <time className="details__post-date">2024.09.12</time>
        </div>
        <p className="details__short-desc">
          Achieving business efficiency Aiming to utilize AI company-wide
        </p>
      </div>
    </a>
  );
}

export default PostCard;
