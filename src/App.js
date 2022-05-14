import axios from 'axios'
import React,{useState,useEffect} from 'react'
import { Items } from './Items/Items'
import  Drawer  from '@material-ui/core/Drawer'

import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import Badge from '@material-ui/core/Badge'
import Carts  from './Carts/Carts'
export const App = () => {
  const [data,setData]= useState([])
  const CalculateTotal1=(items) => 
    items.reduce((ack,item)=> ack + item.amount ,0);
  const [cartOpen,setCartOpen]=useState(false);
  const [cartItem,setCartItem]= useState([]);
  const FetchData=async()=>{
    const res=await axios.get(`https://fakestoreapi.com/products`)
    console.log(res.data)
    setData(res.data)
  }
  useEffect(()=>{
FetchData()
  },[])
 
  const handleAddToCart=(clickedItem)=>{
    setCartItem(prev=>{
      const isItemInCart=prev.find(item=>item.id===clickedItem.id)
      if(isItemInCart){
        return prev.map(item=> item.id===clickedItem.id?{...item,amount:item.amount +1}: item
        );
      }
      return [...prev,{...clickedItem,amount:1}]
    })
  }
  const handleRemoveFromCart=(id)=>{
    setCartItem(prev => prev.reduce((ack,item)=>{
    if(item.id===id){
      if(item.amount===1)  return ack;
      return [...ack,{...item,amount:item.amount -1}];
    }  else {
      return [...ack,item];
    }
    },[] )
    
    )
    
    
    
      }
  
console.log(data)
  return (
    <div>
       <Drawer anchor="right" open ={cartOpen} onClose={()=>{
       setCartOpen(false)
     }}>
       <Carts cartItems={cartItem} addToCart={handleAddToCart}
       removeFromCart={handleRemoveFromCart}/>
      
        </Drawer>
     <button onClick={()=>
       setCartOpen(true)
     }> 
     <Badge badgeContent={CalculateTotal1(cartItem).toFixed(0)} color='error'>
       <AddShoppingCartIcon/>
     </Badge>
       <span style={{color:'red'}}>
      {CalculateTotal1(cartItem).toFixed(0)}
      </span>
     </button>
      {
        data?.map(item=> 
       ( <Items item={item} addToCart={handleAddToCart}/>))
      }
      


    </div>
  )
}
