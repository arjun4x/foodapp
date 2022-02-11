import React ,{useState,useReducer} from 'react';
import CartContext from './cart-context';

const defaultCart={
	items:[],
	totalamount:0
} 
const cartReducer = (state,action)=>{
	
	
	if( action.type === 'Add' ){
		const updateTotalamount = state.totalamount +( 1 * action.item.price);

		const existingItemIndex = state.items.findIndex(item=> item.id === action.item.id);
	
		const existingCartItem = state.items[existingItemIndex];
	
		
		let updateItem;
		if(existingCartItem){
		const	updateItems={
			   ...existingCartItem,
				amount: existingCartItem.amount + 1,
			}
			
			updateItem = [...state.items] ;
			updateItem[existingItemIndex] = updateItems ;
		}else{
			
			updateItem =  state.items.concat(action.item)
		}
		
			
		return{
			items :updateItem,
			totalamount : updateTotalamount,
		}
	}
	
	 if(action.type === 'REMOVE' )
	
	{
	const existingIndex = state.items.findIndex(item => item.id === action.item.id);
	const existingCartItem = state.items[existingIndex];
	console.log(existingCartItem);
	let updateTotalamount = state.totalamount - existingCartItem.price;
	let updateItem;
	let updateItems;
	if(existingCartItem.amount < 2 || updateTotalamount === 1){
		
		updateItems = {
			...existingCartItem,amount:existingCartItem.amount + 0,
		}
		updateTotalamount = 1*existingCartItem.price; 
	}else{
		 updateItems = {
			...existingCartItem,amount:existingCartItem.amount - 1,
		}
		console.log(updateItems);
		updateItem = [...state.items];
		updateItem[existingIndex] = updateItems;
	}
	updateItem = [...state.items];
	updateItem[existingIndex] = updateItems;
	return{
		items :updateItem,
		totalamount :updateTotalamount,
	}
	
	
	}

	

return defaultCart;
}
 const CartProvider = (props) =>{
	 const [cartState, dispatchAction] = useReducer(cartReducer,defaultCart)


	 const addItemCart = (item) => {
		 dispatchAction({type:'Add', item : item})

	 }
	 const removeItemCart = (item) =>{
		 dispatchAction({type:'REMOVE' , item : item})

	 }
	 const cartContext ={
		 items:[],
		 totalamount:0,
		 addItem:addItemCart,
		 removeItem:removeItemCart
	 }
	 
	 return <CartContext.Provider value={{cartContext,cartState}}>
		 {props.children}
	 </CartContext.Provider>
 }
 export default CartProvider;