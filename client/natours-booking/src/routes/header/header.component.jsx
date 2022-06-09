import logo from "../../images/logo-white.png";
import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import Footer from "../../components/footer/footer.component";

const Header = () => {
  return (
    <Fragment>
      <div className="header">
        <Link className="header__text" to="/">
          All tours
        </Link>
        <img className="header__logo" alt="header__logo" src={logo} />
        <div className="header__authentication">
          <Link className="header__authentication-login" to="/login">
            Log in
          </Link>
          <Link className="header__authentication-signup" to="signup">
            Sign up
          </Link>
        </div>
      </div>
      <Outlet />
      <Footer />
    </Fragment>
  );
};

export default Header;