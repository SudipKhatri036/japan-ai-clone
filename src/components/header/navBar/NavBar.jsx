import "./NavBar.css";

const menuList = [
  "Japan Ai Chat",
  "Japan Ai Speech",
  "Japan Ai Marketing",
  "Company Profile",
  "Seminar",
  "news",
  "company introduction materials",
  "inquiry",
];

function NavBar({ isMenuActive }) {
  return (
    <nav className={`nav ${isMenuActive ? "nav--active" : ""}`}>
      <ul className="flex nav__list">
        <li>
          <a
            href="#"
            className="nav__links nav__links--short"
            data-hover="Japan Ai Chat"
          >
            Japan Ai Chat
          </a>
        </li>
        <li>
          <a
            href="#"
            className="nav__links nav__links--short"
            data-hover="Japan Ai Speech"
          >
            Japan Ai Speech
          </a>
        </li>
        <li>
          <a
            href="#"
            className="nav__links nav__links--short"
            data-hover="Japan Ai Marketing"
          >
            Japan Ai Marketing
          </a>
        </li>
        <li>
          <a href="#" className="nav__links" data-hover="Company Profile">
            Company Profile
          </a>
        </li>
        <li>
          <a href="#" className="nav__links" data-hover="Seminar">
            Seminar
          </a>
        </li>
        <li>
          <a href="#" className="nav__links" data-hover="News">
            News
          </a>
        </li>
        <li className="nav__links--special">
          <a
            href="#"
            className="nav__links"
            data-hover="Company introduction materials"
          >
            Company introduction materials
          </a>
        </li>
        <li className="nav__links--special">
          <a href="#" className="nav__links" data-hover="Inquiry">
            inquiry_
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
