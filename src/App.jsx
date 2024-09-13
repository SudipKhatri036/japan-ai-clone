import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import HeroImg from "./components/heroImg/HeroImg";
import Main from "./components/main/Main";

function App() {
  return (
    <>
      <div className="app">
        <Header />
        <Main />
        <Footer />
      </div>
      <HeroImg />
    </>
  );
}

export default App;
