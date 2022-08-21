import React from 'react'

export default function Furnituresub(props) {
    console.log(props);
  return (
    < div className='furnituresub'>
    <img src={`${props.b}`}/>
    <h2>{props.name}</h2>
    <button>{props.children}</button>
    </div>
  )
}
