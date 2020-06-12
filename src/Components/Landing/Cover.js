import React from "react";
import { Row, Col } from "react-bootstrap";

const Cover = () => {
  return (
    <div className="cover">
      <Row>
        <Col md="auto">
          <img src="/images/image1.jpg" alt="image1" className="cover-img" />
        </Col>
        <Col md="auto">
          <p className="cover-caption">Subhasis Das</p>
          <p className="sub-text">Full stack web developer(MERN)</p>
        </Col>
      </Row>
    </div>
  );
};

export default Cover;
