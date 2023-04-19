import React from 'react';
import { AiFillGithub } from 'react-icons/ai';

function Input(props) {
  return (
    <div className='input-group flex-nowrap'>
      <span className="input-group-text" id="addon-wrapping"><AiFillGithub /></span>
      <input className='form-control' type="text" value={props.searchTerm} onChange={props.handleInputChange} />
      <button className='btn btn-outline-secondary' onClick={props.handleSearch}>Cerca</button>
    </div>
  );
}

export default Input;
