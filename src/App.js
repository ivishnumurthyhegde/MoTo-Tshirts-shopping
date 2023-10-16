import React, { useEffect, useState } from 'react';
import Products from './components/Products/Products';
import Navbar from './components/Navbar/Navbar';
import CheckOut from './components/CheckOut/CheckOut';
import { commerce } from './lib/Commerce';
import Cart from './components/Cart/Cart';
import {BrowserRouter, Route, Routes } from 'react-router-dom';



const App = () => {
  const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});
    const [order, setOrder]= useState({});
    const [errorMessage, setErrorMessage]= useState('');

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  
  };

  const handleAddToCart = (productId, quantity) => {
    commerce.cart.add(productId, quantity).then((item) => {
      setCart(item);
    
    }).catch((error) => {
      console.error('There was an error adding the item to the cart', error);
    });
  }

const handleUpdateCart= async(productId, quantity)=>{
  const cart= await commerce.cart.update(productId, {quantity});
  setCart(cart);
};

const handleRemoveFromCart = async(productId)=>{
  const cart = await commerce.cart.remove(productId);
  setCart(cart);
}

const handleEmptyCart= async ()=>{
  const cart = await commerce.cart.empty();
  setCart(cart);
}  

const refreshCart = async () => {
  const newCart = await commerce.cart.refresh();

  setCart(newCart);
};

const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
  try {
    const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);

    setOrder(incomingOrder);

    refreshCart();
  } catch (error) {
    setErrorMessage(error.data.error.message);
  }
};


  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);
 
console.log("cart is ", cart);

  return (<>
  <BrowserRouter>
  <Navbar totalItems={cart.total_items} />
  <Routes>
    <Route path='/' element={<Products products={products} onAddToCart={handleAddToCart} /> } />
    <Route path='/cart' element={
    <Cart 
    cart={cart}
    handleUpdateCart={handleUpdateCart}
    handleRemoveFromCart={handleRemoveFromCart}
    handleEmptyCart={handleEmptyCart}
     />} />

<Route path='/checkout' element={<CheckOut cart={cart}  order={order} onCaptureCheckout= {handleCaptureCheckout} error={errorMessage} /> } />
  </Routes>
 
 </BrowserRouter>
  </>
  )
   
}

export default App