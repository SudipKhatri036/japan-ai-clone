import "./Main.css";
import Hero from "./hero/Hero";
import Overview from "./overview/Overview";
import Product from "./product/Product";

function Main() {
  return (
    <div className="main">
      <Hero />
      <Overview />
      <Product />
    </div>
  );
}

export default Main;
