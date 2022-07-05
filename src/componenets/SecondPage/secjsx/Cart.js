import React from 'react'
import './Cart.css';

export default function Cart() {
  return (
    <div className="outerLayer"> 
    <div className="cartBox">
    <h1 id="cartH">Cart Empty</h1>
    <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_480/Cart_empty_-_menu_2x_ejjkf2" alt="fsndvjfyd"  style={{width:'87%', opacity:"0.8"}}/>
    <p>Good food is always cooking! Go ahead, order some yummy items from the menu</p>
    </div>
    </div>
  )
}
