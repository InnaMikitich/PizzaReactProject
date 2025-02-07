import React from 'react';
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';

import {Header} from './Components';
import {Home, Cart} from './pages';
import { Route, Routes } from 'react-router-dom';
import { setPizzas } from './redux/action/pizzas';




function App( ) {
  const dispatch = useDispatch();
  const storage = useSelector(({pizzas, filters}) => {
    return {
      items: pizzas.items,
      sortBy: filters.sortBy
    };
  });
  console.log(storage)
  React.useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(({ data })=> {
      dispatch(setPizzas(data.pizzas));
  });
}, []);

  return (
    <div className="wrapper">
   <Header />
    <div className="content">
    <Routes>
    <Route path='/' element={<Home items={[]} />} exact />
    <Route path='/cart' element={<Cart/>} exact />
    </Routes>
    </div>
  </div>
  );

}


export default App;

/*
return {
  items: state.pizzas.items,
  filters: state.filters
}

/*
const mapStateToProps = state => {
  return {
    items: state.pizzas.items,
    filters: state.filters
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setPizzas: (items) => dispatch(setPizzasAction(items)),
    
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
*/

