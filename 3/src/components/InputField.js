import React, { Component } from 'react';

export const InputField = (props) =>{
  return (
    <div className="App">
      <input type="text" onChange = {props.handleChange}/>
    </div>
  );
};
