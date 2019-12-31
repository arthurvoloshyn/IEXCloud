import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const EmptyPage = () => (
  <Jumbotron fluid>
    <Container className="themed-container" fluid>
      <h1 className="display-3 text-center">Page is empty</h1>
    </Container>
  </Jumbotron>
);

export default EmptyPage;
