import React,{fragment} from 'react';
import AvailableMeals from './AvailableMeals';
import MealsSummary from './MealsSummary';

const Meals = () =>{
	return(
		<fragment>
			<MealsSummary/>
			<AvailableMeals/>
		</fragment>

	)
}
export default Meals;