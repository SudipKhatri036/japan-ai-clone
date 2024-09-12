import "./Menu.css";

function Menu({ setIsMenuActive, isMenuActive }) {
  return (
    <div className="header__menu-cont">
      <h3>Menu</h3>
      <button
        className={`btn btn--menu-btn ${isMenuActive ? "active" : ""}`}
        onClick={() => setIsMenuActive(!isMenuActive)}
      >
        <span></span>
        <span></span>
      </button>
    </div>
  );
}

export default Menu;
