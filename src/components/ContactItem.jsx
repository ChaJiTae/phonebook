import React from "react";
import { Col, Row } from "react-bootstrap";
import profileIcon from "../image/profileIcon.jpg";

export default function ContactItem() {
  return (
    <Row>
      <Col lg={1}>
        <img width={50} src={profileIcon} />
      </Col>
      <Col lg={11}>
        <div>차지태</div>
        <div>010-0000-0000</div>
      </Col>
    </Row>
  );
}
