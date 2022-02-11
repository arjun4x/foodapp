import React ,{useContext} from 'react';
import classes from './MealItem.module.css'
import MealsItemsForm from './MealItemsForm';
import CartContext from '../../context/cart-context'; 
function MealsItem(props) {
	const cartCtx= useContext(CartContext);
	const cartHandler = (amount,id) =>{
		
		cartCtx.cartContext.addItem({
			id:props.id,
			name:props.name,
			price:props.price,
			amount:+amount

	})	}	
	const price = `$${props.price.toFixed(2)}`;
  return (
	  <li className={classes.meal}>
		  <div>
			  <h2>{props.name}</h2>
		  <div className={classes.description}>{props.description}</div>
		  <div className={classes.price}>{price}</div>
		  </div>
		  <div>
			  <MealsItemsForm 
			  onAddCart ={cartHandler}
			  id={props.id}/>
		  </div>
	  </li>
  );
}

export default MealsItem;
