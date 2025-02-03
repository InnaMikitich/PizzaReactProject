import filterReducer from './filters';
import pizzasReducer from './pizzas';
import { combineReducers } from 'redux';



const rootReducer = combineReducers({
  filterReducer,
  pizzasReducer,
});

export default rootReducer;