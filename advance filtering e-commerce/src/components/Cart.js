import React from 'react'
import CartItem from './CartItem'
import { useSelector } from 'react-redux'
import './cart.css'

export default function Cart() {

   const cart= useSelector((state)=>state.cartState.cart) 
  return (<div>
           <CartItem cart={cart}/>
    </div>
  )
}
