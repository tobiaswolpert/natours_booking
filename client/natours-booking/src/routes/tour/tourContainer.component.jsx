import { useParams } from "react-router-dom";
import { selectTour } from "../../store/tours/tours.selector";
import { useSelector } from "react-redux";
import Spinner from "../../components/spinner/spinner.component";
import Tour from "../../components/tour/tour.component";
import {
  selectToursIsLoading,
  selectToursMap,
} from "../../store/tours/tours.selector";
import { useState } from "react";

export const TourContainer = () => {
  const { tourName } = useParams();
  const isLoading = useSelector(selectToursIsLoading);
  const tourItem = useSelector((state) => selectTour(state, tourName));
  console.log("TourItem", tourItem, "isLoading", isLoading);

  // const tours = useSelector(selectToursMap);
  // const [tour, setTour] = useState(() => tours);

  // useEffect(() => {
  //   setTour(tours.filter((element) => element.slug === tourName));
  // }, [tourName, tours]);

  // console.log("TourItem", tour);
  /////////////////////////////////////////////////////////////////////////////

  // const url = "http://localhost:8000/img/tours/" + tourItem.imageCover;
  // let date = new Date(tourItem.startDates[0].split("T")[0]);

  return isLoading ? (
    <Spinner />
  ) : (
    tourItem.map((element, idx) => <Tour data={element} key={idx} />)
  );
};
