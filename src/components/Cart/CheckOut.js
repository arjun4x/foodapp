import React,{useRef,useState} from 'react';
import classes from './CheckOut.module.css';

  const Checkout = (props) => {
    const [formCheck,setFormCheck] = useState({
      name: true,
      address:true,
      landMark:true,
      city:true,
    })
    console.log(formCheck);
  const nameInputRef = useRef();
  const addressInputRef = useRef();
  const landMarkInputRef = useRef();
  const cityInputRef = useRef();
  const nameClass = `${classes.control} ${formCheck.name ? '': classes.invalid} `;
  const addressClass = `${classes.control} ${formCheck.address ? '' : classes.invalid} `;
  const landMarkClass = `${classes.control} ${formCheck.landMark ? '' : classes.invalid} `;
  const cityClass = `${classes.control} ${formCheck.city ? '' : classes.invalid} `;


  const confirmHandler = (event) => {
    event.preventDefault();
   

  
    const enteredName =  nameInputRef.current.value ;
    const  enteredAddress = addressInputRef.current.value;
    const enteredLandMark = landMarkInputRef.current.value;
    const enteredCity = cityInputRef.current.value;
  
    const isEmpty = value => value.trim() === '';
    const isPostal = value => value.trim().length === 5;
  
    const enteredNameIsVaild = !isEmpty(enteredName);
    const enteredAddressIsVaild = !isEmpty(enteredAddress);
    const enteredLandMarkIsVaild = isPostal(enteredLandMark);
    const enteredCityIsVaild = !isEmpty(enteredCity);
  const formIsVaild = enteredAddressIsVaild &&
                      enteredCityIsVaild && 
                      enteredLandMarkIsVaild &&
                      enteredNameIsVaild;

  setFormCheck({
    name:enteredNameIsVaild,
    address:enteredAddressIsVaild,
    landMark:enteredLandMarkIsVaild,
    city:enteredCityIsVaild,
  })         
  if(formIsVaild){
    props.onSubmit({
      name:enteredName,
      address:enteredAddress,
      landMark:enteredLandMark,
      city:enteredCity,
    })
    return;
  }  
    
  

  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameClass}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' ref={nameInputRef}/>
      </div>
      <div className={addressClass}>
        <label htmlFor='street'>Address</label>
        <input type='text' id='address' ref={addressInputRef}/>
      </div>
      <div className={landMarkClass}>
        <label htmlFor='postal'>Landmark</label>
        <input type='text' id='landmark' ref={landMarkInputRef} />
      </div>
      <div className={cityClass}>
        <label htmlFor='city'>City</label>
        <input type='text' id='city' ref={cityInputRef} />
      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;