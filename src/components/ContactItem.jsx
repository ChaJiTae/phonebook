import React from "react";
import { Col, Row } from "react-bootstrap";
import profileIcon from "../image/profileIcon.jpg";

export default function ContactItem({ item }) {
  return (
    <Row>
      <Col lg={1}>
        <img width={50} src={profileIcon} />
      </Col>
      <Col lg={11}>
        <div>{item.name}</div>
        <div>{item.phoneNumber}</div>
      </Col>
    </Row>
  );
}
