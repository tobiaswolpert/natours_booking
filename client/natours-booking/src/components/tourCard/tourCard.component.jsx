const TourCard = ({ tour }) => {
  console.log("props", tour);
  let date = new Date(tour.startDates[0].split("T")[0]);
  console.log("date", date.toLocaleString("default", { month: "long" }));
  console.log("date", date.getFullYear());

  return (
    <div className="card">
      <div className="card__picture">Hallo</div>

      <div className="card__description">
        <div className="card__heading">
          {tour.difficulty} {tour.duration}-Day Tour
        </div>
        <div className="card__text">{tour.summary}</div>

        <div className="card__details">
          <div className="card__location">{tour.startLocation.description}</div>
          <div className="card__date">
            {date.toLocaleString("default", { month: "long" })}{" "}
            {date.getFullYear()}
          </div>
          <div className="card__stops">
            {tour.locations.length}{" "}
            {tour.locations.length === 1 ? "stop" : "stops"}
          </div>
          <div className="card__people">{tour.maxGroupSize} people</div>
        </div>
      </div>

      <div className="card__footer">
        <div className="card__footer-data">
          <div className="card__price">
            <strong>${tour.price}</strong> per person
          </div>
          <div className="card__rating">
            <strong>{tour.ratingsAverage}</strong> rating (
            {tour.ratingsQuantity})
          </div>
        </div>
        <button className="card__btn">Details</button>
      </div>
    </div>
  );
};

export default TourCard;
