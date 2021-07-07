import {createStore, combineReducers , applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import cartReducer from './cart/cartReducer';
import categoriesReducer from './categories/categoriesReducer'
import productsReducer from './products/productsReducer'

let rootReducer = combineReducers({categories: categoriesReducer,
products: productsReducer,
cart: cartReducer})

let store = createStore(rootReducer, applyMiddleware(thunk));

export default store;