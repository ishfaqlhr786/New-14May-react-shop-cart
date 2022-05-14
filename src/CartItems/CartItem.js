

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
         <button size='small'
            disableElevation
            variant="contained"
            onClick={()=>{
                removeFromCart(item.id)
            }}
            
            >
               - </button>   
               <p>{item.amount}</p>
                <button size='small'
            disableElevation
            variant="contained"
            onClick={()=>{
                addToCart(item)
            }}
            
            >
               +</button>   

        </div>
        <img src={item.image}  alt={item.title} width="100px" height="100px"/>
    </div>
)

export default CartItem