import classes from './Modal.module.css' ;
import ReactDOM from 'react-dom';
import React ,{fragment} from 'react';
const BackDrop = (props) =>{
	 return <div onClick={props.onClose} className={classes.backdrop}/>

}
const ModalOverlay = (props) =>{
	return (
		<div className={classes.modal}>
			<div className={classes.content}>
				{props.children}
			</div>
		</div>
	)
}
const portalElement = document.getElementById('overlays');
const Modal = (props) =>{
	return(
		<fragment>
		{ReactDOM.createPortal(<BackDrop onClose={props.onCloses} />,portalElement)}
		{ReactDOM.createPortal(<ModalOverlay>
			{props.children}
			</ModalOverlay>,portalElement)}
		</fragment>

	)
}
export default Modal;