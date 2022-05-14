import React from 'react'
import '../index.css'
export const Items = ({item,addToCart}) => {
  return (
    <div className='wrapper'>
        <div className='item'>
        <h4>Category:{item.category}</h4>
        <p>Title: {item.title}</p>
        <p><img src={item.image} alt="ll" height="100px" width="100px" /></p>
       <p>Price: {item.price}</p>
       <button onClick={()=>addToCart(item)}>addToCart</button>

   </div>

    </div>
  )
}
