
import classes from './Cart.module.css';
import React,{Fragment, useContext,useState} from 'react';
import Modal from '../UI/Modal';
import CartContext from '../context/cart-context';
import CartItem from './CartItem';
import CheckOut from './CheckOut';
const Cart = (props) =>{
	const [order,setOrder] = useState(false);
	const [submitIn,setSubmitIn] = useState(false);
	const [submitted,setSubmitted] = useState(false);
	const ctx = useContext(CartContext);
	const totalamount = `$${ctx.cartState.totalamount}`; 
	const hasItem = ctx.cartState.items.length ===  1;
	console.log(hasItem);
	const submitting = <p>Order is submitting</p>
	const closeHandler = ( )=>{
		props.setState(false);
	}
	const completed = <Fragment>
		<p>Your is order is placed</p>
	<button onClick ={closeHandler} className={classes.btn}>close</button>
	</Fragment>

	const cartAddHandler = (item) =>{
		
		ctx.cartContext.addItem(item);


	}
	
	const cartRemoveHandler = (item) =>{
		ctx.cartContext.removeItem(item);

	}
	const submitHandler = (userData) =>{
		setSubmitIn(true);
		fetch('https://foodapp-b49e1-default-rtdb.firebaseio.com/order.json',{
			method:'POST',
			body:JSON.stringify({
		    user:userData,
			order:ctx.cartState.items,
		})
		
	}); 
	setSubmitIn(false);
	setSubmitted(true);	 


	}

	const cancelHandler = () =>{
		setOrder(false);
	}
	

	 const cartItems=<ul className={classes['cart-items']}>{ctx.cartState.items.map(item=>
		<CartItem key={item.id}
		          id={item.id}
                  name={item.name}
				  price={item.price}
				  amount={item.amount}
				  onAdd={cartAddHandler.bind(null,item)}
				  onRemove={cartRemoveHandler.bind(null,item)}
			
				  />)}</ul>
      const cartEverthing = <Fragment>
		  	{cartItems}
			<div className={classes.total}>
				<span>Total Amount</span>
				<span>{totalamount}</span>
				</div>
			<div className={classes.actions}>
				<button onClick = {closeHandler} className={classes['button--alt']}>close</button>
				{hasItem && <button onClick={()=>{setOrder(true)}}className={classes.button}>order</button>}
				
			</div>
			{order &&<CheckOut onSubmit={submitHandler} onCancel={cancelHandler}/>}

	  </Fragment>
	return(
		
		<Modal onCloses={closeHandler} >
			{ !submitIn && !submitted && cartEverthing}
			{submitIn ? submitting : ''}
			{submitted ? completed : ''}
		
		
	    </Modal>

	)
}
export default Cart;