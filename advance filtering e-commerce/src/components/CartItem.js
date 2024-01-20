import React from 'react'
import { removeCart } from '../Reducer/cartSlice';
import { useDispatch } from 'react-redux';

export default function CartItem({cart}) {
  let price=0;
  const dispatch = useDispatch()
  
  return (
      <div className='testMe'>

        <h1>Shopping Cart</h1>
        {cart.length===0 ? (<h3 style={{marginTop:"1%"}}>Your cart is empty</h3>):(
          cart.map((item)=>{
              price+=Number(item.newPrice)
              console.log(item.id)
              return (
                  <div className='test2' key={Math.random()}>
                      <img className='card-img' src={item.img}/>
                      <h5>{item.title}</h5>
                      <p>{'$'+item.newPrice}</p>
                      <button onClick={()=>dispatch(removeCart(item.id))} className='removeBtn'>Remove</button>
                  </div>
                )}
        ))}
        <p>{
        cart.length===0?(<p></p>):(<div className='total'>
        <h2>Total: </h2>
        <h3>{'$'+price}</h3>
        </div>
        )
        }</p>
      </div>
  )
  
}
