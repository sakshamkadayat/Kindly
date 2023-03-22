import "./navbar.css";
import krishna from "../../Images/meta.png";
import { Link} from "react-router-dom";
export function Head() {
  return (
    <header>
      <div className="nav-container">
        <div className="nav-image">
          <img src={krishna} className="logo" alt="logo"
            height={'130vh'}
            width={'250vh'}
          />
        </div>
        <nav className="nav-links">
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About Krishna</Link>
            </li>
            <li>
              <Link to="/books">Books</Link>
            </li>
            <li>
              <Link to="/audio">Audio</Link>
            </li>
            <li>
              <Link to="/video">video</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
