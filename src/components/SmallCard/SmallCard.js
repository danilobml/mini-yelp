import React from "react";
import "./SmallCard.css";
import { ListGroup, ListGroupItem, Card,Col, Row } from "react-bootstrap";

export default function SmallCard({ restaurant }) {
  console.log(restaurant);
  return (
    <div>
      CARD for RESTAURANT
      <Card style={{ width: "18rem", border:'primary' }}>
        <Card.Img variant="top" bsPrefix={'card-img'} src={restaurant.imgUrl} />
        <Card.Body>
          <Card.Title>{restaurant.name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem> 

            Address: {restaurant.address}, {restaurant.city},
            {restaurant["postal code"]}

          </ListGroupItem>
          <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
          <ListGroupItem>Vestibulum at eros</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>




      <h1>{restaurant.name}</h1>
      <h3>
        Address: {restaurant.address}, {restaurant.city},
        {restaurant["postal code"]}
      </h3>
      <h1>{restaurant.name}</h1>
      <h1>{restaurant.name}</h1>
      <h1>{restaurant.name}</h1>
    </div>
  );
}
