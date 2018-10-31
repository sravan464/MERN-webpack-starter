import React from 'react';
import { Alert, Container } from 'reactstrap';

const Spinner = ({ message }) => (
  <div>
    <div className="spinner">
      <div className="rect1" />
      <div className="rect2" />
      <div className="rect3" />
      <div className="rect4" />
      <div className="rect5" />
      <div className="rect6" />
    </div>
    <div>
      {message ? (
        <Container>
          <Alert color="primary">{message}</Alert>
        </Container>
      ) : (
        <span />
      )}
    </div>
  </div>
);

export default Spinner;
