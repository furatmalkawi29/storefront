import {createStore, combineReducers} from 'redux'
import cartReducer from './cart/cartReducer';
import categoriesReducer from './categories/categoriesReducer'
import productsReducer from './products/productsReducer'

let rootReducer = combineReducers({categories: categoriesReducer,
products: productsReducer,
cart: cartReducer})

let store = createStore(rootReducer);

export default store;