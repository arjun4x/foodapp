import CartIcon  from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import React , { useContext ,useEffect,useState} from 'react';

import  CartContext  from '../context/cart-context';

const HeaderCartButton = (props) =>{
	const Ctx = useContext(CartContext);
	const [btnHighLi,setBtnHighLi] = useState(false);
	const {items} = Ctx.cartState;
	
	console.log(Ctx);
	useEffect(()=>{
		if(Ctx.cartState.items.length === 0){
			return;
		}
		setBtnHighLi(true);
		const timer = setTimeout(()=>{
			setBtnHighLi(false);
			
		
	
	},500);
	return()=>{
		clearTimeout(timer);

	};
	},[items])
	const btnClass = `${classes.button} ${btnHighLi ? classes.bump : ''}` ;
	
	const numberOfOrder = Ctx.cartState.items.reduce((curNumber,item) =>{
		
		return curNumber + item.amount;
       },0);
	console.log(numberOfOrder);

	return(
		<button onClick={props.onButton} className={btnClass}>
			<span className={classes.icon}><CartIcon/></span>
			<span>Your Cart</span>
			<span className={classes.badge}>{numberOfOrder}</span>
		</button>
	)
}
export default HeaderCartButton; 