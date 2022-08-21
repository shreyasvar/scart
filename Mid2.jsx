import React from 'react'
import './style/Mid2.css';

export default function Mid2(props) {
    console.log(props);
  return (
    <div className='area'>
          <img src={`${props.sss}`} alt="" />
        <p>{props.name}</p>
        <h2>{props.price}</h2>
        <button>{props.children}</button>

    </div>
  )
}
