import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";

function BasicExample() {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(0);
  const dispatch = useDispatch();

  const addContact = (event) => {
    event.preventDefault();
    dispatch({
      type: "ADD_CONTACT",
      payload: { name, phoneNumber },
    });
  };

  return (
    <Form className="formSet" onSubmit={addContact}>
      <Form.Group className="formName" controlId="formName">
        <Form.Label className="formNameLabel">이름</Form.Label>
        <Form.Control
          type="text"
          placeholder="이름을 입력해주세요"
          onChange={(event) => setName(event.target.value)}
        />
      </Form.Group>

      <Form.Group className="formContact" controlId="formContact">
        <Form.Label className="formContactNumber">전화번호</Form.Label>
        <Form.Control
          type="number"
          placeholder="전화번호를 입력해주세요"
          onChange={(event) => setPhoneNumber(event.target.value)}
          className="formContactNumberInput"
        />
      </Form.Group>
      <Button className="submitButton" variant="primary" type="submit">
        추가
      </Button>
    </Form>
  );
}

export default BasicExample;
