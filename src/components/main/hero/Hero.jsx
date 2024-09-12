import { FaChevronDown } from "react-icons/fa";

import "./Hero.css";

function Hero() {
  return (
    <div className="hero">
      <h2 className="hero__subtitle">Generative AI deployment company</h2>
      <h1 className="hero__title">
        Creating a sustainable future society with AI
      </h1>
      <div className="hero__btn-cont">
        <button className="btn btn--scroll">
          Scroll Down <FaChevronDown />
        </button>
      </div>

      <div className="hero__description">
        <p>
          JAPAN AI combines the wisdom and experience of our predecessors with
          modern innovation
        </p>

        <p>
          to create a vairety of new value to improve the productivity of
          Japanese companies and revitalize industry.
        </p>
      </div>
    </div>
  );
}

export default Hero;
