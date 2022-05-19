import logo from "../../images/logo-white.png";

const Header = () => {
  return (
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
  );
};

export default Header;
