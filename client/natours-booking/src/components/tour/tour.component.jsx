const Tour = ({ data }) => {
  console.log("Data", data);

  const url = "http://localhost:8000/img/tours/" + data.imageCover;
  // let date = new Date(tourItem.startDates[0].split("T")[0]);

  return (
    <div className="tour">
      <div className="tour__picture">
        <img
          className="tour__picture-img"
          crossOrigin="anonymous"
          src={url}
          alt={data.name}
        />
        <div className="tour__picture-details">
          <div className="tour__picture-name">{data.name} Tour</div>
          <div className="tour__description">
            <div className="tour__duration">{data.duration} days</div>
            <div className="tour__location">
              {data.startLocation.description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tour;
