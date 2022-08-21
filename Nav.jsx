import React from 'react'
import './style/Nav.css';
import {NavLink} from 'react-router-dom';
export default function Nav() {
    return (
        <>
            <div className='Nav'>
                <div className='headss'>
                    <div className='item1'>
                        <NavLink to='/' activeclassname='active'>Ajio</NavLink>
                    </div>
                    <div className='item2'>
                        <NavLink to='/grocery'activeclassname='active'>Grocery</NavLink>
                    </div>
                    <div className='item3'>
                        <NavLink to='/furniture'activeclassname='active'> Furniture</NavLink>
                    </div>
                    <div className='item4'>
                        <NavLink to='/buynow'activeclassname='active'> BuyNow </NavLink>
                    </div>
                </div>

                <div className='storepic'>
                    <img src="images/logo2.png" alt="" />
                    <h1>StoreM1</h1>

                </div>
            </div>



        </>
    )
}

