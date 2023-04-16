import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import BasicExample from './newTable';

function FormComponent() {
  const [data, setData] = useState([]);//Hook React per gestire lo stato dei dati

  const handleName = (event) => {
    event.preventDefault();
    let firstNameValue = document.getElementById("firstName").value;
    let lastNameValue = document.getElementById("lastName").value;
    let userNameValue = document.getElementById("userName").value;
    setData([...data, { firstName: firstNameValue, lastName: lastNameValue, userName: userNameValue }]);
  }
  
  return (
    <React.Fragment>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>First Name</Form.Label>
          <Form.Control id="firstName" type="text" placeholder="Enter name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Last Name</Form.Label>
          <Form.Control id="lastName" type="text" placeholder="Enter Last Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Username</Form.Label>
          <Form.Control id="userName" type="text" placeholder="Enter User Name" />
        </Form.Group>
        <Button variant="success" onClick={handleName}>
          Add
        </Button>
      </Form>
      <BasicExample data={data} />
    </React.Fragment>
  );
}

export default FormComponent;
