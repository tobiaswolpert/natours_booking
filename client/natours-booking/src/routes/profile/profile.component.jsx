import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import {
  selectUserDetails,
  selectUserToken,
} from "../../store/user/user.selector";
import { updateUserAsync } from "../../store/user/user.action";

const Profile = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectUserToken);

  const [userDetails, setUserDetails] = useState({
    name: useSelector(selectUserDetails).name,
    email: useSelector(selectUserDetails).email,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(updateUserAsync(userDetails, token));
  };

  const handleChange = (event) => {
    switch (event.target.name) {
      case "email":
        setUserDetails({
          ...userDetails,
          [event.target.name]: event.target.value,
        });
        break;

      case "name":
        setUserDetails({
          ...userDetails,
          [event.target.name]: event.target.value,
        });
        break;

      default:
        console.log("check");
    }
  };

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
          <form className="input" onSubmit={handleSubmit}>
            <label className="input__label">Name</label>
            <input
              className="input__input"
              name="name"
              value={userDetails.name}
              onChange={handleChange}
            ></input>

            <label className="input__label">Email</label>
            <input
              type="email"
              name="email"
              className="user-input__input"
              value={userDetails.email}
              onChange={handleChange}
            ></input>
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
