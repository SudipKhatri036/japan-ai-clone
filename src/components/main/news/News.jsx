import PostCard from "../postCard.jsx/postCard";
import { GoTriangleRight } from "react-icons/go";
import "./News.css";

function News() {
  return (
    <section className="news">
      <h2 className="section-heading">News</h2>
      <div className="news__post-card-cont">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
      <button className="btn btn--boxArrow">
        Click here for the list of news <GoTriangleRight className="btn-icon" />
      </button>
    </section>
  );
}

export default News;
