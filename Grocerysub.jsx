import React from 'react'

export default function Grocerysub(props) {
    console.log(props);
  return (
    <div className='grocerysub'>
        <img src={`${props.ssss}`} alt="" />
        <p>{props.name}</p>
        <h2>{props.price}</h2>
        <button>{props.children}</button>
    </div>
  )
}

