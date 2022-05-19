const Header = () => {
  return (
    <div className="header">
      <div className="header__text">All tours</div>
      <img className="header__logo" alt="header__logo" src={"test"} />
      <div className="authentication">
        <div className="authentication__login">Log in</div>
        <div className="authentication__signup">Sign up</div>
      </div>
    </div>
  );
};

export default Header;
