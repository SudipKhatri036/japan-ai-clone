import "./Main.css";
import Hero from "./hero/Hero";
import News from "./news/News";
import Overview from "./overview/Overview";
import Product from "./product/Product";

function Main() {
  return (
    <div className="main">
      <Hero />
      <Overview />
      <Product />
      <News />
    </div>
  );
}

export default Main;
