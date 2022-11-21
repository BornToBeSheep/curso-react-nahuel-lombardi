import React from 'react';
import NavBar from './components/NavBar.jsx';
import Banner from './components/Banner.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';


function App() {
  return (
    <div className='body__container bg-dark'>
      <NavBar />
      <Banner />
      <ItemListContainer greeting={"Bienvenido a TodoSeguridad"}/>
    </div>
  );
}
export default App;
