function NavBarLink({ list, index }) {
  const { title } = list;
  const linksShort = index <= 2 ? "nav__links--short" : "";
  const linksSpecial = index > 5 ? "nav__links--special" : "";
  return (
    <li className={linksSpecial}>
      <a href="#" className={`nav__links ${linksShort}`} data-hover={title}>
        {title}
      </a>
    </li>
  );
}

export default NavBarLink;
