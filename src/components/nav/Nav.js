import "./_nav.scss";
import { Link } from "react-router-dom";
import rewards from "../../assets/images/rewards.png";
const Nav = () => {
  return (
    <header>
      <Link role="button" tabIndex={0} className="nav-link link" to="/">
        <h1 className="comic">Countless Fun</h1>
      </Link>
      <Link
        aria-label="go to Score page"
        className="link"
        role="button"
        tabIndex={0}
        to="/scores"
      >
        <img
          width="60px"
          className="rewards-icon link"
          src={rewards}
          alt="rewards icon link"
        />
      </Link>
    </header>
  );
};

export default Nav;
