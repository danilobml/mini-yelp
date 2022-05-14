import "bootstrap/dist/css/bootstrap.min.css";
import "./Restaurant.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import { useEffect, useState } from "react";
import MyMap from "../../Map/MyMap";
import Reviews from "./Reviews";
import MyNavbarRest from "./MyNavbarRest";
import ReactStars from "react-stars";

const Restaurant = ({ restaurants }) => {
  const [openClosed, setOpenClosed] = useState("closed");

  const setOpen = () => {
    setOpenClosed("open");
  };
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const date1 = new Date();
  const timeNow = date1.getHours() + ":" + date1.getMinutes() + ":00";
  let today = days[date1.getDay()];
  let state = "closed";

  const currentDayOpen = (day, time) => {
    const startTime = time ? time.substring(0, 5) + ":00" : "";
    const endTime = time ? time.substring(6, 11) + ":00" : "";
    if (day === today && timeNow <= endTime && timeNow >= startTime) {
      state = "open";
    } else {
      state = "closed";
    }

    return state;
  };

  useEffect(() => {
    if (state === "open") setOpen();
  }, [openClosed, state]);

  return (
    <Container>
      <Row className="my-3">
        <Col sm={12} className="ms-0">
          <MyNavbarRest sm={6} />
        </Col>
      </Row>
      <Row className="my-3">
        <h1>{restaurants[0].name}</h1>
        <br />
      </Row>
      <Row>
        <Col>
          <Image fluid src={restaurants[0].imgUrl} />
          <Row>
            <Col sm={5} className="m-3 mt-4 ms-0">
              <MyMap className="map" restaurants={restaurants} />
            </Col>
            <Col sm={3} className="mt-4 ms-4">
              <h5>Address:</h5>
              <p>{restaurants[0].address}</p>
              <p>
                {restaurants[0]["postal code"]}, {restaurants[0].city}
              </p>
              <br />
              <h5>Categories:</h5>
              <ul>
                {restaurants[0].categories.map((item, index) => {
                  return <li key={index}>{item}</li>;
                })}
              </ul>
              <br />
              <h5>Average Rating: {restaurants[0].stars}</h5>
              <ReactStars count={5} onChange={null} edit={false} size={24} color2={"#ffd700"} value={restaurants[0].stars} />
            </Col>
            <Col></Col>
            <Col sm={3} className="mt-4 ms-4">
              <h5>Opening Hours</h5>
              {Object.keys(restaurants[0].hours).map((x, index) => (
                <p key={index} className={x === today ? currentDayOpen(x, restaurants[0].hours[x]) : ""}>
                  {x + ": " + restaurants[0].hours[x]}
                </p>
              ))}{" "}
              <p>
                <strong>{openClosed}</strong>
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <Reviews restaurants={restaurants[0]} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default Restaurant;
