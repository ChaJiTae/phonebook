import React from "react";
import { Col, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

function SearchBox() {
  return (
    <Row>
      <Col lg={10}>
        <Form.Control type="text" placeholder="이름을 입력해주세요" />
      </Col>
      <Col lg={2}>
        <Button variant="primary" type="submit">
          찾기
        </Button>
      </Col>
    </Row>
  );
}

export default SearchBox;
