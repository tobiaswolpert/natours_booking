import { useState, useEffect } from "react";
import TourCard from "../tourCard/tourCard.component";

const TourList = () => {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    const fetchData = async (url) => {
      const result = await fetch(url);
      const data = await result.json();
      setTours(data.data.doc);
    };
    fetchData("http://localhost:8000/api/v1/tours");
  }, []);

  console.log("hallo");
  return (
    <div className="tourList">
      {tours.map((tour) => (
        <TourCard tour={tour} />
      ))}
    </div>
  );
};

export default TourList;
