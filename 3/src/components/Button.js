import React, { Component } from 'react';

export const Button = (props) =>{
  return (
    <div className="App">
      <button onClick={props.handleClick}>Click me!</button>
    </div>
  );
};
