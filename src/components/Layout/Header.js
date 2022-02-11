import React,{fragment} from 'react';
import Image from '../../assets/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) =>{

	return <fragment>
		<header className={classes.header}>
			<h1>Homely Meals</h1>
			<HeaderCartButton onButton={props.onSet}/>
		</header>
		<div className={classes['main-image']}>
			<img src={Image} alt="image is not loading"/> 
		</div>
	</fragment>
}
export default Header;