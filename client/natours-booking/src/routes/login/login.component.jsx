const Login = () => {
  return (
    <div className="login-container">
      <div className="login">
        <h3>Log into your account</h3>
        <form className="login__form">
          <label>Email address</label>
          <input type="email" required />
          <label>Password</label>
          <input type="password" required />
          <button className="login__btn" type="submit">
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
