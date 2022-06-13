const Tour = ({ data }) => {
  console.log("Data", data);

  const url = "http://localhost:8000/img";
  let date = new Date(data.startDates[0].split("T")[0]);
  console.log(date);

  return (
    <div className="tour">
      <div className="tour__picture">
        <div className="tour__picture-overlay"></div>
        <img
          className="tour__picture-img"
          crossOrigin="anonymous"
          src={url + "/tours/" + data.imageCover}
          alt={data.name}
        />
        <div className="tour__picture-details">
          <div className="tour__picture-name">
            <span>{data.name} Tour</span>
          </div>
          <div className="tour__description">
            <div className="tour__duration">
              <ion-icon name="time-outline"></ion-icon>
              <span>{data.duration} days</span>
            </div>
            <div className="tour__location">
              <ion-icon name="location-outline"></ion-icon>
              <span>{data.startLocation.description}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="tour__left"></div>
      <div className="tour__right"></div>

      <div className="tour__facts">
        <div className="tour__facts-container">
          <h3>Quick Facts </h3>
          <div className="tour__facts-data">
            <div className="tour__facts-item">
              <div className="tour__facts-description">
                <ion-icon name="calendar-clear-outline"></ion-icon>
                <span>Next Date</span>
              </div>
              <div className="tour__facts-information">
                {date.toLocaleString("default", { month: "long" })}{" "}
                {date.getFullYear()}
              </div>
            </div>

            <div className="tour__facts-item">
              <div className="tour__facts-description">
                <ion-icon name="trending-up-outline"></ion-icon>
                <span>Difficulty</span>
              </div>
              <div className="tour__facts-information">{data.difficulty}</div>
            </div>

            <div className="tour__facts-item">
              <div className="tour__facts-description">
                <ion-icon name="person-outline"></ion-icon>
                <span>Participants</span>
              </div>
              <div className="tour__facts-information">
                {data.maxGroupSize} People
              </div>
            </div>

            <div className="tour__facts-item">
              <div className="tour__facts-description">
                <ion-icon name="star-outline"></ion-icon>
                <span>Rating</span>
              </div>
              <div className="tour__facts-information">
                {data.ratingsAverage} / {data.ratingsQuantity}
              </div>
            </div>
          </div>
        </div>

        <div className="tour__guides">
          <h3>Your tour guides</h3>
          <div className="tour__guides-data">
            {data.guides.map((element) => {
              return (
                <div className="tour__guides-item">
                  <div className="tour__guides-description">
                    <img
                      className="tour__guides-img"
                      crossOrigin="anonymous"
                      src={url + "/users/" + element.photo}
                      alt={element.name}
                    />
                    <div className="tour__guides-rank">
                      {element.role.split("-").join(" ")}
                    </div>
                  </div>
                  <div className="tour__guides-name">{element.name}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="tour__about">
        <div className="tour__about-container">
          <h3>About {data.name} tour</h3>
          <div className="tour__about-text">{data.description}</div>
        </div>
      </div>
    </div>
  );
};

export default Tour;
