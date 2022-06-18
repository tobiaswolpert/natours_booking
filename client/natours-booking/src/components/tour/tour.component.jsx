import { Fragment } from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Tour = ({ data }) => {
  console.log("Data", data);
  const [reviews, setReviews] = useState();
  console.log("reviews", reviews);
  const stars =
    reviews &&
    reviews.map((element) => {
      let temp = [];
      for (let i = 1; i <= 5; i++) {
        i <= element.rating
          ? temp.push(<ion-icon name="star"></ion-icon>)
          : temp.push(<ion-icon name="star-outline"></ion-icon>);
      }
      return temp;
    });

  console.log("stars", stars);

  useEffect(() => {
    const fetchReview = async (link) => {
      const response = await fetch(link);
      const review = await response.json();
      setReviews(review.data.doc.reviews);
    };
    fetchReview(`http://localhost:8000/api/v1/tours/${data.id}`);
  }, [data.id]);

  const url = "http://localhost:8000/img";
  let date = new Date(data.startDates[0].split("T")[0]);
  console.log(date);

  return (
    reviews && (
      <>
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
                  <div className="tour__facts-information">
                    {data.difficulty}
                  </div>
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
        <div className="tour__image">
          {data.images.map((element) => {
            return (
              <img
                crossOrigin="anonymous"
                src={url + "/tours/" + element}
                alt={element.name}
              />
            );
          })}
        </div>

        <div className="reviews">
          <div className="reviews__container">
            {reviews.map((element, idx) => {
              return (
                <div className="reviews__card">
                  <div className="reviews__person">
                    <img
                      className="reviews__image"
                      crossOrigin="anonymous"
                      src={url + "/users/" + element.user.photo}
                      alt={"name"}
                    />
                    <div className="reviews__name">{element.user.name}</div>
                  </div>
                  <div className="reviews__text">{element.review}</div>
                  <div className="reviews__stars">{stars[idx]}</div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="cta">
          <div className="cta-box">
            <div className="cta__images">
              {data.images.map((element) => {
                return (
                  <img
                    crossOrigin="anonymous"
                    src={url + "/tours/" + element}
                    alt={"name"}
                  />
                );
              })}
            </div>

            <div className="cta__text">
              <h3>What are you waiting for?</h3>
              <div>
                {data.duration} days. 1 adventure. Infinite memories. Make it
                yours today
              </div>
            </div>

            <Link to={"/login"}>
              <div className="cta__btn">Login to book tour</div>
            </Link>
          </div>
        </div>
      </>
    )
  );
};

export default Tour;
