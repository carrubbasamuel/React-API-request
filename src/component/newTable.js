import React from 'react';
import Table from 'react-bootstrap/Table';
import DisplayData from "./DisplayData";

function BasicExample(props) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
      {props.data.map((item, i) => (
        <DisplayData key={i} i={i+1} firstName={item.firstName} lastName={item.lastName} userName={item.userName}/>
      ))}
      </tbody>
    </Table>
  );
}

export default BasicExample;
