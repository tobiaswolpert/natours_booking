import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Header from "./routes/header/header.component";
import Login from "./routes/login/login.component";
import Profile from "./routes/profile/profile.component";
import { TourContainer } from "./routes/tour/tourContainer.component";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchToursAsync } from "./store/tours/tours.action";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchToursAsync());
  }, [dispatch]);

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/tour/:tourName" element={<TourContainer />} />
          <Route path="/login" element={<Login />} />
          <Route path="/me" element={<Profile />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
