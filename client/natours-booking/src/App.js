import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Header from "./routes/header/header.component";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "./store/user/user.selector";

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
