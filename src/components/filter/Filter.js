import React from "react";
import { Button, Form, FormControl, Navbar } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";

const Filter = ({handleChange,title,ratingChange}) => {

  return (
    <div>
      <Navbar
        bg="dark"
        variant="dark"
        className="d-flex justify-content-around"
      >
        <Navbar.Brand href="#home">Netflix</Navbar.Brand>
        <div>
          <div>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
               onChange={handleChange}
               value={title}
              />
            </Form>
          </div>
          <div>
            <ReactStars
              count={5}
              onChange={ratingChange}
              size={24}
              activeColor="#ffd700"
              isHalf={true}
            />
          </div>
        </div>
      </Navbar>
    </div>
  );
};

export default Filter;
