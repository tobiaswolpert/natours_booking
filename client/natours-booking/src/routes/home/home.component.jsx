import TourList from "../../components/tourList/tourList.component";
import { useDispatch } from "react-redux";
import { useEffect, Fragment } from "react";
import { fetchToursAsync } from "../../store/tours/tours.action";
import { selectToursIsLoading } from "../../store/tours/tours.selector";
import { useSelector } from "react-redux";
import Spinner from "../../components/spinner/spinner.component";

const Home = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectToursIsLoading);
  console.log("LOADING", isLoading);

  useEffect(() => {
    dispatch(fetchToursAsync());
  }, [dispatch]);

  return <>{isLoading ? <Spinner /> : <TourList />}</>;
};

export default Home;
