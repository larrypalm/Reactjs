import React from 'react';

function InputField(props){
  return(
    <input onChange={props.onChange} type="text" value={props.value}/>
  );
}

export default InputField;
