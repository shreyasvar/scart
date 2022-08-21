import React from 'react'

export default function Grocerysub1(props) {
  console.log(props);
  return (
  <div className='Grocerysub1'>
    <img src={`${props.s}`} alt="" />
    <p>{props.name}</p>
    <h4>{props.price}</h4>
    <button>{props.children}</button>
  </div>
  )
}
