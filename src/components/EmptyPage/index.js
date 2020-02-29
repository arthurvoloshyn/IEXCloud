import React from 'react';
import { Col } from 'reactstrap';

import { emptyPageSizes } from '../../consts';

const { xs, lg, md, sm } = emptyPageSizes;

const EmptyPage = () => (
  <Col xs={xs} sm={sm} md={md} lg={lg}>
    <h1 className="display-3 text-center">Page is empty</h1>
  </Col>
);

export default EmptyPage;
