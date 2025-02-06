import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';

import {Header} from './Components';
import {Home, Cart} from './pages';
import { Route, Routes } from 'react-router-dom';
import { setPizzas, setPizzas as setPizzasAction } from './redux/action/pizzas';




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
     this.props.setPizzas(data.pizzas);
  });
}

  render() {
    return (
      <div className="wrapper">
     <Header />
      <div className="content">
      <Routes>
      <Route path='/' element={<Home items={this.props.items} />} exact />
      <Route path='/cart' element={<Cart/>} exact />
      </Routes>
      </div>
    </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.pizzas.items,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setPizzas: (items) => dispatch(setPizzasAction(items)),
    
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
