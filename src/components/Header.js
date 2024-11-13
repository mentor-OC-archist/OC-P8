import "../assets/style/Header.scss";
import imgHeader from "../assets/image/dev.jpg";

function Header() {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <a>Présentation</a>
          </li>
          <li>
            <a>Compétence</a>
          </li>
          <li>
            <a>Projets</a>
          </li>
          <li>
            <a>Contacts</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
