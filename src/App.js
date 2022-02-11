import React,{useState,useContext} from 'react';
import Cart from './components/Cart/Cart';
import CartContext from './components/context/cart-context';
import CartProvider from './components/context/CartProvider';
import Header from './components/Layout/Header';
import Meals from  './components/Meals/Meals' 
function App() {
  const [state ,setState] = useState(false);
  const buttonHandler = () => {
    setState(true);
  }
const buttonCloser = () => {

setState(false);
}

  return (
    <CartProvider>
     {state && <Cart setState={setState} />}
     <Header onSet={buttonHandler} />
     <main>
       <Meals/>
     </main>
   </CartProvider>
  );
}

export default App;
