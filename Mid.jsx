import React from 'react'
import './style/Mid.css';

export default function Mid(props) {
    console.log(props);
  return (
    <div className='photos'>
        <img src={`${props.ss}`} alt="" />
        <p>{props.name}</p>
        <h2>{props.price}</h2>
        <button>{props.children}</button>


    </div>
  )
}
