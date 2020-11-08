import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './HomeComponent.css';
import Button from './../UiElements/Button';
import UserDetail from './../User/UserDetail';

const HomeComponent = () => {
  return (
    
      <Card className=" container d-flex align-items-center justify-content-center my-5 col-lg-4">
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Card Subtitle
          </Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Link to="/users">
            <Button className="py-5">Give</Button>
          </Link>

          <Button>Get</Button>
        </Card.Body>
      </Card>
  
  );
};

export default HomeComponent;
