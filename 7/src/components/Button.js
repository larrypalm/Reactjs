import React from 'react';

function Button (props) {
  let className = "";

  if(props.primary){
    className = 'btn btn-primary';
  }
  else if(props.success){
    className = 'btn btn-success';
  }
  else if(props.danger){
    className = 'btn btn-danger';
  }
  return(

    <button className={className}>
      {props.title}
    </button>
  )

}

export default Button;
