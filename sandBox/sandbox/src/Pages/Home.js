import React, { useState } from 'react'
import Cart from './Cart'
import Product from './Product'

export default function Home() {

  
  const data=[
    {id:1,name:'aaa',price:10},{id:2,name:'bbb',price:20},
    {id:3,name:'ccc',price:30},{id:4,name:'ddd',price:40},
  ]  

  const [cart,setCart] = useState([])
  
  const addToCart = (data)=>{
    setCart([...cart,data])
  }

  const handleRemove = (id)=>{
    const newCart=cart.filter((item)=>id!==item.id)
    setCart(newCart)
  }
 

  return (
    <div>
      <div>
      {data.map((item)=>{
        
    return <Product key={item.id} data={item} addToCart={addToCart}/>
})}

      </div>
      <div>
        <Cart item={cart} handleRemove={handleRemove}/>
      </div>
      </div>
  )
}
