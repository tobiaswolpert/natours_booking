import TourList from "../../components/tourList/tourList.component";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setToursData } from "../../store/tours/tours.action";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async (url) => {
      const result = await fetch(url);
      const data = await result.json();
      dispatch(setToursData(data.data.doc));
    };

    fetchData("http://localhost:8000/api/v1/tours");
  }, [dispatch]);

  return (
    <div>
      <TourList />
    </div>
  );
};

export default Home;
