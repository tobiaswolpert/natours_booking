import logo from "../../images/logo-white.png";
import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import Footer from "../../components/footer/footer.component";
import { useSelector } from "react-redux";
import {
  selectUserIsLoggedIn,
  selectUserDetails,
} from "../../store/user/user.selector";

const Header = () => {
  const isLoggedIn = useSelector(selectUserIsLoggedIn);
  const userData = useSelector(selectUserDetails);
  const url = "http://localhost:8000/img";

  return (
    <Fragment>
      <div className="header">
        <Link className="header__text" to="/">
          All tours
        </Link>
        <img className="header__logo" alt="header__logo" src={logo} />
        <div className="header__authentication">
          {isLoggedIn ? (
            <>
              <Link className="header__authentication-login" to="/login">
                Log Out
              </Link>
              <Link className="user" to="/me">
                <img
                  src={url + "/users/" + userData.photo}
                  alt="user_image"
                  crossOrigin="anonymous"
                  className="user__image"
                />
                <div className="user__name">{userData.name.split(" ")[0]}</div>
              </Link>
            </>
          ) : (
            <>
              <Link className="header__authentication-login" to="/login">
                Log in
              </Link>
              <Link className="header__authentication-signup" to="signup">
                Sign up
              </Link>
            </>
          )}
        </div>
      </div>
      <Outlet />
      <Footer />
    </Fragment>
  );
};

export default Header;
