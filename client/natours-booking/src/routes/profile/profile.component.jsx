const Profile = () => {
  return (
    <div className="profile-container">
      <div className="user-nav">
        <ul className="user-nav__list">
          <li className="user-nav__item">
            <ion-icon name="settings-outline"></ion-icon>
            <span>settings</span>
          </li>
          <li className="user-nav__item">
            <ion-icon name="briefcase-outline"></ion-icon>
            <span>my bookings</span>
          </li>
          <li className="user-nav__item">
            <ion-icon name="star-outline"></ion-icon>
            <span>my reviews</span>
          </li>
          <li className="user-nav__item">
            <ion-icon name="card-outline"></ion-icon>
            <span>billing</span>
          </li>
        </ul>
      </div>

      <div className="main">
        <div className="settings">
          <h3>Your account settings</h3>
          <form className="input">
            <label className="input__label">Name</label>
            <input className="input__input" required></input>

            <label className="input__label">Email</label>
            <input type="email" className="user-input__input" required></input>
            <button className="input__btn" type="submit">
              save settings
            </button>
          </form>
        </div>

        <hr></hr>

        <div className="settings">
          <h3>password change</h3>
          <form className="input">
            <label className="input__label">Current password</label>
            <input type="password" className="input__input" required></input>

            <label className="input__label">New password</label>
            <input type="password" className="input__input" required></input>

            <label className="user-input__label">Confirm password</label>
            <input type="password" className="input__input" required></input>

            <button className="input__btn" type="submit">
              save password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
