import React from 'react';
import "animate.css"
import NavBar from './components/NavBar.jsx';
import Banner from './components/Banner.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';


function App() {
  return (
    <div className='body__container bg-dark'>
      <NavBar />
      <ItemListContainer greeting={"Bienvenido a TodoSeguridad"}/>
      <Banner />
    </div>
  );
}
export default App;
