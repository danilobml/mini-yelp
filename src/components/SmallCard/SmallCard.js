import React from "react";
import ReactStars from 'react-stars'
import "./SmallCard.css";
import { ListGroup, ListGroupItem, Card } from "react-bootstrap";

export default function SmallCard({ restaurant }) {
  //console.log(restaurant);
  return (
    <div>
   
      
      <Card  style={{ width: "18rem" }}>
        <Card.Img variant="top" bsPrefix={"card-img"} src={restaurant.imgUrl} />
        <Card.Body>
          <Card.Title>1. {restaurant.name}</Card.Title>

          <Card.Text>
          <ReactStars
                        count={5}
                        onChange={null}
                        edit={false}
                        size={24}
                        color2={'#ffd700'}
                        value = {4.5} />
          <span>{restaurant.reviews.length}</span>  
          </Card.Text>
          <p>"{restaurant.reviews[0].review}"</p>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem></ListGroupItem>
          <ListGroupItem>
            <span>Tags:</span> {restaurant.categories.join(", ")}
          </ListGroupItem>
          <ListGroupItem>
            <span>Address:</span> {restaurant.address}, {restaurant.city},
            {" " + restaurant["postal code"]}
          </ListGroupItem>
        </ListGroup>
        <Card.Body>
          {Object.keys(restaurant.hours).map((x) => (
            <p>{x + ": " + restaurant.hours[x]}</p>
          ))}
        </Card.Body>
      </Card>
    </div>
  );
}
