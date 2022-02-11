
import React,{useEffect,useState} from 'react';
import classes from './Available.module.css';
import Card from '../UI/Card';
import MealsItem from './MealItems/MealsItem';


  const AvailableMeals = () =>{
	

	const [food,setFood] = useState([]);
	const[isLoading,setIsLoading] = useState(true);
	const [httperror,setHttpError] = useState();
	

	useEffect(()=>{
		const FetchData = async() =>{
			
			const response = await fetch('https://foodapp-b49e1-default-rtdb.firebaseio.com/Meals.json');
			console.log(response);
	
			console.log('hello');
			const responseData = await response.json();
			const loadedData = [];
			console.log(responseData);
			for(const key in responseData){
				loadedData.push({
					id:key,
					name:responseData[key].name,
					price:responseData[key].price,
					description:responseData[key].description,
				})
				
		
			}
			
			setFood(loadedData);
			setIsLoading(false);

		
		};

	
		FetchData().catch((error)=>{
			setIsLoading(false);
		setHttpError(error.message);

		})
		
		
		
		
		
		
	
	},[])


	  
	  const meals=	food.map((meal)=>{
		  
		return(  <MealsItem
		     id={meal.id}
		     key={meal.id}
			 name={meal.name}
			 description={meal.description}
			 price={meal.price}
		/>
	  
	)
	})
	if(isLoading){
		return(
			<section className={classes.mealLoading}>
				<h1>Loading....</h1>
			</section>
		)
	}
	if(httperror){
		return(
			<section>
				<h1 className={classes.errorClass}>{httperror}</h1>
			</section>
		)
	}

	  return(
		  
		  <section className={classes.meals}>
		  <Card>
		  { meals}
          </Card>
		  </section>
		 


	  )
  }
  export default AvailableMeals;