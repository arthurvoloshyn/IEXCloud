import React from 'react';
import { Col } from 'reactstrap';

const EmptyPage = () => (
  <Col xs="12" sm={{ size: 10, offset: 1 }} md={{ size: 8, offset: 2 }} lg={{ size: 6, offset: 3 }}>
    <h1 className="display-3 text-center">Page is empty</h1>
  </Col>
);

export default EmptyPage;
