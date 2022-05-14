

// styles
const CartItem = ({item,addToCart,removeFromCart})=>(
    
    <div>
        <div>
            <h3>{item.title}</h3>
            <div className="information">
            <p>price: ${item.price}</p>
            
            <p>Total: ${item.amount * item.price}</p>
            </div>
        </div>
        <div className="buttons">
        <img src={item.image}  alt={item.title} width="100px" height="100px"/>
         <button size='small'
            disableElevation
            variant="contained"
            onClick={()=>{
                removeFromCart(item.id)
            }}
            
            >
               - </button>   
               <span>{item.amount}</span>
                <button size='small'
            disableElevation
            variant="contained"
            onClick={()=>{
                addToCart(item)
            }}
            
            >
               +</button>   

        </div>
       
    </div>
)

export default CartItem