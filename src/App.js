import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar.jsx';
import ItemDetailContainer from './components/ItemDetailContainer.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';
import Error404 from './components/Error404.jsx';


function App() {
  return (
    <BrowserRouter className='body__container bg-dark'>
      <NavBar />
      <Routes>
        <Route path={"/"} element={<ItemListContainer />}/>
        <Route path={"/category/:id"} element={<ItemListContainer />}/>
        <Route path={"/item/:id"} element={<ItemDetailContainer />}/>
        <Route path={"*"} element={<Error404 />}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
