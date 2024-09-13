import { useState, useEffect } from "react";

import NavBar from "./navBar/NavBar";
import Menu from "./menu/Menu";
import Logo from "../logo/Logo";

import "./Header.css";

function Header() {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [isFixedNav, setIsFixedNav] = useState(false);

  function setFixed() {
    if (window.scrollY >= 100) setIsFixedNav(true);
    else setIsFixedNav(false);
  }

  useEffect(
    function () {
      window.addEventListener("scroll", setFixed);
    },
    [isFixedNav]
  );

  return (
    <header className={`header ${isFixedNav ? "header--fixed" : ""}`}>
      <Logo imgSrc={`./logo_${!isMenuActive && isFixedNav ? "b" : "w"}.svg`} />
      <NavBar isMenuActive={isMenuActive} isFixedNav={isFixedNav} />
      <Menu
        setIsMenuActive={setIsMenuActive}
        isMenuActive={isMenuActive}
        isFixedNav={isFixedNav}
      />
    </header>
  );
}

export default Header;
