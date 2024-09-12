import { useState } from "react";

import "./Header.css";

import Logo from "./logo/Logo";
import NavBar from "./navBar/NavBar";
import Menu from "./menu/Menu";

function Header() {
  const [isMenuActive, setIsMenuActive] = useState(false);

  return (
    <header className="header flex">
      <Logo />
      <NavBar isMenuActive={isMenuActive} />
      <Menu setIsMenuActive={setIsMenuActive} isMenuActive={isMenuActive} />
    </header>
  );
}

export default Header;
