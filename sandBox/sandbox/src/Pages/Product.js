import React from 'react'

export default function Product({data,addToCart}) {
// console.log(data[0].name)

  return (<div>
      <h2>{data.name}</h2>
      <h2>{data.price}</h2>
      <button onClick={()=>addToCart(data)}>Add To Cart</button>
    </div>
  )
}
