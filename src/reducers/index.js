import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import validateReducer from './validateReducer';


export default combineReducers({
    products: productsReducer,
    error: validateReducer
})