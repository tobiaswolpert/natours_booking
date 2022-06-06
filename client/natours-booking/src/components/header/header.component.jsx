import logo from "../../images/logo-white.png";

const Header = () => {
  return (
    <div className="header">
      <div className="header__text">All tours</div>
      <img className="header__logo" alt="header__logo" src={logo} />
      <div className="header__authentication">
        <a className="header__authentication-login" href="#">
          Log in
        </a>
        <a className="header__authentication-signup" href="#">
          Sign up
        </a>
      </div>
    </div>
  );
};

export default Header;
