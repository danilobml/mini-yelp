import { Container, Card } from "react-bootstrap";

const Reviews = ({ restaurants }) => {
  return (
    <>
      <h5>Reviews:</h5>
      {restaurants.reviews.map((item, index) => {
        return (
          <Card bg="light" key={index} text="dark" className="mb-2">
            <Card.Header>
              <strong>{index + 1}.</strong>
            </Card.Header>
            <Card.Body>
              <Card.Title>Rating: {item.rating}</Card.Title>
              <Card.Text>Review: {item.review}</Card.Text>
            </Card.Body>
          </Card>
        );
      })}

      {/* <div>
        <h5>Reviews:</h5>
        {restaurants.reviews.map((item, index) => {
          return (
            <div key={index}>
              <p>
                <strong>{index + 1}.</strong> Rating: {item.rating}
              </p>
              <p>Review: {item.review}</p>
            </div>
          );
        })}
      </div> */}
    </>
  );
};

export default Reviews;
