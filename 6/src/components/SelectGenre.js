import React, { Component } from 'react';

function SelectGenre(props) {
  return (
    <select>
      <option value="">All</option>
      <option value="Drama">Drama</option>
      <option value="Action">Action</option>
      <option value="Crime">Crime</option>
      <option value="Adventure">Adventure</option>
    </select>
  );
}

export default SelectGenre;
