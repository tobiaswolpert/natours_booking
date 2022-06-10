import { useParams } from "react-router-dom";
import { selectToursMap } from "../../store/tours/tours.selector";
import { useSelector } from "react-redux";

export const Tour = () => {
  const { tourName } = useParams();
  // const tour = useSelector(selectTour(tourName));
  // console.log("TOUR", tour);

  return <div className="tour">Hallo</div>;
};
