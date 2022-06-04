const TourCard = (props) => {
  return (
    <div className="card">
      <div className="card__picture">Hallo</div>
      <div className="card__description">{props.data.name}</div>
    </div>
  );
};

export default TourCard;
