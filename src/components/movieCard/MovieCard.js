import React from "react";
import { Button, Card } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";

const MovieCard = ({ movie }) => {
          console.log(movie)
  return (
    <div>
      <Card style={{ width: "19rem" }} className="mx-3 my-4">
        <Card.Img variant="top" src={movie.posterUrl} height="250px"/>
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>
            {movie.description}
            <ReactStars
              count={movie.rate}
              size={24}
              activeColor="#ffd700"
              isHalf={true}
            />
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
