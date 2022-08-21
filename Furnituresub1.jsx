import React from 'react'

export default function Furnituresub1(props) {
  console.log(props);
  return (
    <div className='furnituresub1'>
    <img src={`${props.bb}`}></img>
    <h3>{props.name}</h3>
    <p>{props.price}</p>
    </div>
  )
}
