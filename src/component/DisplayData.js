import React from 'react';

function DisplayData(props) {
  return (
    <tr>
      <td>{props.i}</td>
      <td>{props.firstName}</td>
      <td>{props.lastName}</td>
      <td>{props.userName}</td>
    </tr>
  );
}

export default DisplayData;