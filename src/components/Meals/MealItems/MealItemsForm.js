import React,{useRef,useState} from 'react';
import classes from './MealItem.module.css';
import Input from '../../UI/Input';
const MealsItemsForm = (props) =>{
	const[amountValid,setAmountValid] = useState(true);
	const amountRef = useRef();
	const submitHandler = ( event) => {
		
		event.preventDefault();
	const inputAmount = amountRef.current.value;
	const inputAmountNum = +inputAmount;
	if(inputAmount.trim().lenght == 0 || inputAmountNum < 1 || inputAmountNum >5){
		setAmountValid(false)
		return;
	}
	
	
	return props.onAddCart(inputAmountNum);
	

	}

	return(
		<form className={classes.form} >
			<Input ref={amountRef} label="amount" input={{
				id:"amount" + props.id,
				type:'number',
				min:'1',
				max:'5',
				step:'1',
				defaultValue:1



			}}/>
			<button className={classes.price} onClick={submitHandler} >+ Add</button>
			{ !amountValid && <p>input is invaild</p>}
		</form>

	)


}
export default MealsItemsForm;