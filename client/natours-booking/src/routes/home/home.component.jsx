import TourList from "../../components/tourList/tourList.component";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchToursAsync } from "../../store/tours/tours.action";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchToursAsync());
  }, [dispatch]);

  return (
    <div>
      <TourList />
    </div>
  );
};

export default Home;
