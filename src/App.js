import React from 'react';
import axios from 'axios';
import {useDispatch} from 'react-redux';

import {Header} from './Components';
import {Home, Cart} from './pages';
import { Route, Routes } from 'react-router-dom';
import { setPizzas } from './redux/action/pizzas';




function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    axios.get('http://localhost:3001/pizzas').then(({ data }) => {
      dispatch(setPizzas(data.pizzas)); console.log(data.pizzas)
  });
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



