import { useState, useEffect } from "react";
import TourCard from "../tourCard/tourCard.component";

const TourList = () => {
  const [tours, setTours] = useState([]);
  console.log(tours[0]);

  useEffect(() => {
    const fetchData = async (url) => {
      const result = await fetch(url);
      const data = await result.json();
      setTours(data.data.doc);
    };

    fetchData("http://localhost:8000/api/v1/tours");
  }, []);

  return (
    <div className="tourList">
      {tours.map((tour, idx) => (
        <TourCard tour={tour} key={idx} />
      ))}
    </div>
  );
};

export default TourList;
