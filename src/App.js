import React from 'react';

import {useDispatch} from 'react-redux';

import {Header} from './Components';
import {Home, Cart} from './pages';
import { Route, Routes } from 'react-router-dom';
import { fetchPizzas } from './redux/action/pizzas';




function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
   console.log(fetchPizzas());
}, []);

  return (
    <div className="wrapper">
   <Header />
    <div className="content">
    <Routes>
    <Route path='/' element={<Home/>} exact />
    <Route path='/cart' element={<Cart/>} exact />
    </Routes>
    </div>
  </div>
  );

}


export default App;



