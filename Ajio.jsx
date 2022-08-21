import React from 'react'
import Nav1 from './Nav1'
import Mid from './Mid'
import Mid1 from './Mid1'
import Mid2 from './Mid2'

export default function Home() {
  return (
    <>
    <div className='Home'>
    <Nav1></Nav1>
    <div className='midsection'>
     <Mid ss='images/shop0.jpg' name='Brown Glasses' price='$4'>Buy now</Mid>
     <Mid ss='images/shop1.jpg' name='Men Shoes' price='$14'>Buy now</Mid>
     <Mid ss='images/shop2.jpg' name='Blue Bagpack' price='$9'>Buy now</Mid>
     <Mid ss='images/shop3.jpg' name='Red Snappack' price='$40'>Buy now</Mid>
     <Mid ss='images/shop4.jpg' name='Black glasses' price='$5'>Buy now</Mid>
     <Mid ss='images/shop5.jpg' name='Women Shoes' price='$10'>Buy now</Mid>
     <Mid ss='images/shop6.jpg' name='Red Bagpack' price='$6'>Buy now</Mid>
     <Mid ss='images/shop7.jpg' name='Red Cap' price='$2'>Buy now</Mid>              
  </div>
  <Mid1></Mid1>
  <div className='mid1section'>
     <Mid2 sss='images/shop0.jpg' name='Brown Glasses' price='$4'>Buy now</Mid2>
     <Mid2 sss='images/shop1.jpg' name='Men Shoes' price='$14'>Buy now</Mid2>
     <Mid2 sss='images/shop2.jpg' name='Blue Bagpack' price='$9'>Buy now</Mid2>
     <Mid2 sss='images/shop3.jpg' name='Red Snappack' price='$40'>Buy now</Mid2>
     <Mid2 sss='images/shop4.jpg' name='Black glasses' price='$5'>Buy now</Mid2>
     <Mid2 sss='images/shop5.jpg' name='Women Shoes' price='$10'>Buy now</Mid2>
  </div>
  </div>
      

   </>
    

  )
}
