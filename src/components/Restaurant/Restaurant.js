import { Container, Row, Col, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import MyMap from "../../Map/MyMap";
import Reviews from "./Reviews";

const Restaurant = ({ restaurants }) => {
  return (
    <Container>
      <Row>
        <Col>
          <Image src={restaurants[0].imgUrl} />
          <MyMap restaurants={restaurants} />
          <h5>Name: {restaurants[0].name}</h5>
          <h5>Address:</h5>
          <p>{restaurants[0].address}</p>
          <p>
            {restaurants[0]["postal code"]}, {restaurants[0].city}
          </p>
          <h5>Categories:</h5>
          <ul>
            {restaurants[0].categories.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
          <h5>Average Rating: {restaurants[0].stars}</h5>
          <h5>Opening Hours</h5>
          <p>Monday: {restaurants[0].hours.Monday}</p>
          <p>Tuesday: {restaurants[0].hours.Tuesday}</p>
          <p>Wednesday: {restaurants[0].hours.Wednesday}</p>
          <p>Thursday: {restaurants[0].hours.Thursday}</p>
          <p>Friday: {restaurants[0].hours.Friday}</p>
          <p>Saturday: {restaurants[0].hours.Saturday}</p>
          <p>Sunday: {restaurants[0].hours.Sunday}</p>
          <Reviews restaurants={restaurants[0]} />
        </Col>
      </Row>
    </Container>
  );
};
export default Restaurant;
