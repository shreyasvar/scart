import React from "react";
import "./style/Grocery.css";
import Grocerysub from "./Grocerysub";
import Grocerysub1 from "./Grocerysub1";

export default function Grocery() {
  return (
    <>
      <div className="cab">
        <img src="images/cabbage.webp" alt="" />
      </div>
      <div className="block">
        <h6> Fresh Fruits And Vegatables</h6>
        <h1>ORGANIC</h1>
        <h1>PRODUCTS</h1>
        <button>Shop Now</button>
      </div>
      <div className="main">
        <h5>Popular Category</h5>
        <div className="gro">
          <Grocerysub ssss="images/pic1.webp" name="Fresh Fruit" price="$4">
            Buy now
          </Grocerysub>
          <Grocerysub
            ssss="images/pic2.webp"
            name="Fresh Vegatable"
            price="$14"
          >
            Buy now
          </Grocerysub>
          <Grocerysub
            ssss="images/pic3.webp"
            name="Bread and Bakery"
            price="$9"
          >
            Buy now
          </Grocerysub>
          <Grocerysub ssss="images/pic4.webp" name="Sweets" price="$40">
            Buy now
          </Grocerysub>
          <Grocerysub ssss="images/pic5.webp" name="Meat" price="$5">
            Buy now
          </Grocerysub>
          <Grocerysub ssss="images/pic6.webp" name="Drinks" price="$10">
            Buy now
          </Grocerysub>
          <Grocerysub ssss="images/pic7.webp" name="Coffee" price="$6">
            Buy now
          </Grocerysub>
          <Grocerysub ssss="images/pic8.webp" name="Snacks" price="$2">
            Buy now
          </Grocerysub>
        </div>
        <div className="cap">
          <img src="images/cap.webp" alt="" />
        </div>
        <div className="block1">
          <p>Starting from $2.9</p>
          <h1>Sensational season discounts</h1>
          <button>Shop Now</button>
        </div>
      </div>
      <div className="main1">
        <div className="part1">
          <img src="images/cup.webp" alt="" />
        </div>

        <div className="part2">
          <Grocerysub1
            s="images/img1.webp"
            name="Muscle Milk Pro Series"
            price="$9"
          >
            Buy now
          </Grocerysub1>
          <Grocerysub1
            s="images/img2.webp"
            name="Norigami Non Gmo Gluten"
            price="$40"
          >
            Buy now
          </Grocerysub1>
          <Grocerysub1
            s="images/img3.webp"
            name="Nuthouse Granola Company"
            price="$5"
          >
            Buy now
          </Grocerysub1>
          <Grocerysub1
            s="images/img4.webp"
            name="Organic Keto Raw Nuts Mix"
            price="$10"
          >
            Buy now
          </Grocerysub1>
          <Grocerysub1
            s="images/img5.webp"
            name="Owyn Vegan Protein Shake"
            price="$5"
          >
            Buy now
          </Grocerysub1>
          <Grocerysub1
            s="images/img6.webp"
            name="Pans Mushroom Jerky Vegan"
            price="$10"
          >
            Buy now
          </Grocerysub1>
        </div>
      </div>
    </>
  );
}
