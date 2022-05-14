import React from "react";
import ReactStars from "react-stars";
import "./SmallCard.css";
import { ListGroup, ListGroupItem, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import HoursCollapsible from "../HoursCollapsible/HoursCollapsible";
import { useNavigate } from "react-router-dom";

export default function SmallCard({ restaurant }) {
  const navigate = useNavigate();

  const handleRedirectToRestaurant = () => {
    navigate(`/restaurant/${restaurant.business_id}`);
  };

  return (
    <>
      <div className="containerSC">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" bsPrefix={"card-img"} src={restaurant.imgUrl} onClick={handleRedirectToRestaurant} />
          <Card.Body>
            <Card.Title onClick={handleRedirectToRestaurant}>1. {restaurant.name}</Card.Title>

            <Card.Text>
              <div id="address">
                <span>Address:</span> {restaurant.address}, {restaurant.city},{" " + restaurant["postal code"]}
              </div>
              <div className="rating">
                <ReactStars count={5} onChange={null} edit={false} size={24} color2={"#ffd700"} value={restaurant.stars} />
                <p id="avgRating">(Ratings: {restaurant.reviews.length})</p>
              </div>
            </Card.Text>
            <p>"{restaurant.reviews[0].review}"</p>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>
              <span>Tags:</span> {restaurant.categories.join(", ")}
            </ListGroupItem>
          </ListGroup>

          <Card.Body>
            <HoursCollapsible hours={restaurant.hours} />
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
