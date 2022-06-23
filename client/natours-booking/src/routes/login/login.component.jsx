const Login = () => {
  return (
    <div className="login">
      <h3>Log into your account</h3>
      <form className="login__form">
        <label>Email address</label>
        <input type="email" required placeholder="you@example.com" />
        <label>Password</label>
        <input
          type="password"
          required
          pattern=".{8,}"
          placeholder="password"
        />
        <button className="login__btn" type="submit">
          LOGIN
        </button>
      </form>
    </div>
  );
};

export default Login;
