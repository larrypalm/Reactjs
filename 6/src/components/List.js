import React from 'react';

function List(props) {
    const list = props.data.map((item, index) =>{
      return <p key={index}>{item.title}</p>
    });
    return <section>{list}</section>
}

export default List;
