import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar.jsx';
import ItemDetailContainer from './components/ItemDetailContainer.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';
import Error404 from './components/Error404.jsx';
import CartContextProvider from './components/context/CartContext.jsx';
import Cart from './components/Cart.jsx';
import Checkout from './components/Checkout.jsx';


function App() {
  return (
    <CartContextProvider>
      <BrowserRouter className='body__container bg-dark'>
        <NavBar />
        <Routes>
          <Route path={"/"} element={<ItemListContainer />}/>
          <Route path={"/category/:id"} element={<ItemListContainer />}/>
          <Route path={"/item/:id"} element={<ItemDetailContainer />}/>
          <Route path={"/Cart"} element={<Cart/>}/>
          <Route path={"/Checkout"} element={<Checkout/>}/>
          <Route path={"*"} element={<Error404 />}/>
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}
export default App;
