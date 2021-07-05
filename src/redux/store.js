import {createStore, combineReducers} from 'redux'
import  categoriesReducer from './categories/categoriesReducer'
import productsReducer from './products/productsReducer'

let rootReducer = combineReducers({categories: categoriesReducer,
products: productsReducer})

let store = createStore(rootReducer);

export default store;