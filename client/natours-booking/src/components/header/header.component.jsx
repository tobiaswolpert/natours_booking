import logo from "../../images/logo-white.png";
import { Outlet } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="header__text">All tours</div>
        <img className="header__logo" alt="header__logo" src={logo} />
        <div className="authentication">
          <a className="authentication__login" href="#">
            Log in
          </a>
          <a className="authentication__signup" href="#">
            Sign up
          </a>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Header;
