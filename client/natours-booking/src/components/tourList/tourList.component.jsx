import { useState, useEffect } from "react";
import TourCard from "../tourCard/tourCard.component";

const TourList = () => {
  const [tours, setTours] = useState([]);
  console.log("tours", tours.data.doc[0]);

  useEffect(() => {
    const fetchData = async (url) => {
      console.log(url);
      const result = await fetch(url);
      const data = await result.json();
      setTours(data);
      console.log("data", data);
    };
    fetchData("http://localhost:8000/api/v1/tours");
  }, []);

  return (
    <div className="tourList">
      <TourCard data={tours.data.doc[0]} />
    </div>
  );
};

export default TourList;
