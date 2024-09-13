import "./Menu.css";

function Menu({ setIsMenuActive, isMenuActive, isFixedNav }) {
  return (
    <div
      className={`header__menu-cont ${
        !isMenuActive && isFixedNav ? "dark" : ""
      }`}
    >
      <h3>Menu</h3>
      <button
        className={`btn btn--menu-btn ${isMenuActive ? "active" : ""} `}
        onClick={() => setIsMenuActive(!isMenuActive)}
      >
        <span></span>
        <span></span>
      </button>
    </div>
  );
}

export default Menu;
