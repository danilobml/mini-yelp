import "bootstrap/dist/css/bootstrap.min.css";
import "./Restaurant.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import MyMap from "../../Map/MyMap";
import Reviews from "./Reviews";
import Search from "../Search/Search";
import logo from "../images/logo.png";

const Restaurant = ({ restaurants }) => {
  return (
    <Container>
      <Row className="my-3">
        <Col sm={2} className="ms-0">
          <img src={logo} style={{ width: "160px", height: "75px" }} />
        </Col>
        <Col sm={10} className="mt-2">
          <Search />
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
            </Col>
            <Col></Col>
            <Col sm={3} className="mt-4 ms-4">
              <h5>Opening Hours</h5>
              <p>Monday: {restaurants[0].hours.Monday}</p>
              <p>Tuesday: {restaurants[0].hours.Tuesday}</p>
              <p>Wednesday: {restaurants[0].hours.Wednesday}</p>
              <p>Thursday: {restaurants[0].hours.Thursday}</p>
              <p>Friday: {restaurants[0].hours.Friday}</p>
              <p>Saturday: {restaurants[0].hours.Saturday}</p>
              <p>Sunday: {restaurants[0].hours.Sunday}</p>
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
