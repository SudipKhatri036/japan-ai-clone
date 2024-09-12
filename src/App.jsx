import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

function App() {
  return (
    <>
      <div className="app">
        <Header />
        <Main />
      </div>
      <div className="hero-img-wrapper">
        <img src="./main.jpg" alt="Main Background" className="app__main-img" />
      </div>
    </>
  );
}

export default App;
