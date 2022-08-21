import React from 'react'
import "./style/Furniture.css";
import Furnituresub from './Furnituresub';
import Furnituresub1 from './Furnituresub1';


export default function Furniture() {
  return (
    <>
    <div className='fur'>
    <img src="images/fur.jpg" alt="" />
    </div>
    <div className="blocks">
        <h1>Creative Design</h1>
        <h1>Mordern & Exculusive Furniture</h1>
        <button>Shop Now</button>
      </div>
      <div className='nure'>
       <Furnituresub  b="images/banner1.jpg " name='Office Furniture'>Shop Now</Furnituresub> 
      <Furnituresub b="images/banner2.jpg" name='Home Furniture'>Shop Now</Furnituresub> 
      </div>
      <div className='pop'>
      <h1>Popular Furniture</h1>
      <h3>Home:Office</h3>
      </div>
      <div className='nure1'>
      <Furnituresub1 bb="images/product-2.jpg" name='stylish chair' price='$10'> </Furnituresub1>
      <Furnituresub1 bb="images/product-3.jpg"name='table' price='$6'> </Furnituresub1>
      <Furnituresub1 bb="images/product-4.jpg" name='stylish bad' price='$7'> </Furnituresub1>
      <Furnituresub1 bb="images/product-5.jpg" name='discuss floor' price='$15'> </Furnituresub1>
      <Furnituresub1 bb="images/product-6.jpg" name='dressing table' price='$10'> </Furnituresub1>
      <Furnituresub1 bb="images/product-7.jpg" name='dinning table' price='$50'> </Furnituresub1>
      <Furnituresub1 bb="images/product-8.jpg" name='block' price='$10'> </Furnituresub1>
      <Furnituresub1 bb="images/product-9.jpg" name='chair' price='$20'> </Furnituresub1>
      
      </div>
      

    </>
  )
}
