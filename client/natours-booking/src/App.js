import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Header from "./routes/header/header.component";
import { Tour } from "./routes/tour/tour.component";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="tour/:tourName" element={<Tour />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
