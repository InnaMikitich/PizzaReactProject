import React from 'react';
import axios from 'axios';

import {Header} from './Components';
import {Home, Cart} from './pages';
import { Route, Routes } from 'react-router-dom';




//function App() {


//React.useEffect(() => {
//axios.get('http://localhost:3000/db.json').then(({ data })=> {
  //setPizzas(data.pizzas);
////});

//}, []);
  
//}

class App extends React.Component {
  componentDidMount() {
    axios.get('http://localhost:3000/db.json').then(({ data })=> {
     console.log(data.pizzas);
  });
}
  render() {
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
}


export default App;
