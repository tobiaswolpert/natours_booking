import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Header from "./routes/header/header.component";
import Login from "./routes/login/login.component";
import Profile from "./routes/profile/profile.component";
import { TourContainer } from "./routes/tour/tourContainer.component";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchToursAsync } from "./store/tours/tours.action";
import {
  selectUserIsLoggedIn,
  selectUserToken,
  selectTokenExpiration,
} from "./store/user/user.selector";
import { logoutUser } from "./store/user/user.action";

let logoutTimer;

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectUserIsLoggedIn);
  const token = useSelector(selectUserToken);
  const tokenExpiration = useSelector(selectTokenExpiration);

  useEffect(() => {
    dispatch(fetchToursAsync());
  }, [dispatch]);

  useEffect(() => {
    if (token && tokenExpiration) {
      const remainingTime =
        new Date(tokenExpiration).getTime() - new Date().getTime();
      logoutTimer = setTimeout(() => dispatch(logoutUser()), remainingTime);
    } else {
      clearTimeout(logoutTimer);
    }
  }, [token, dispatch, tokenExpiration]);

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/tour/:tourName" element={<TourContainer />} />
          <Route path="/login" element={<Login />} />
          {isLoggedIn ? <Route path="/me" element={<Profile />} /> : null}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
