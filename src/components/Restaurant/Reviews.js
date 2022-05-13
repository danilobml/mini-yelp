const Reviews = ({ restaurants }) => {
  return (
    <div>
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
    </div>
  );
};

export default Reviews;
