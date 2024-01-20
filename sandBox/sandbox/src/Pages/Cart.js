import React from 'react'

const Cart = ({item,handleRemove}) => {

// const han


let price=0
  return (
    <div>
        <h2>Cart Item</h2>
        <ul>
            {item.map((item)=>{
                {price+=item.price}
              return  <li key={item.id}>
                    {item.name} - {item.price}
                    <button onClick={()=>handleRemove(item.id)} >Remove</button>
                </li>
            })}
        </ul>
        <p>Total: {price}</p>
        </div>
  )
}

export default Cart