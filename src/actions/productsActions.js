import { SHOW_PRODUCTS, DELETE_PRODUCT, ADD_PRODUCT, SHOW_SINGLE_PRODUCT, UPDATE_PRODUCT } from './types';
import axios from 'axios';

export const showProducts = () => async dispatch => {
    const resp = await axios.get('http://localhost:5000/products');
    dispatch({
        type: SHOW_PRODUCTS,
        payload: resp.data
    });
}
export const showSingleProduct = id => async dispatch => {
    const resp = await axios.get(`http://localhost:5000/products/${id}`);
    dispatch({
        type: SHOW_SINGLE_PRODUCT,
        payload: resp.data
    });
}
export const deleteProducts = id => async dispatch => {
    await axios.delete(`http://localhost:5000/products/${id}`);
    dispatch({
        type: DELETE_PRODUCT,
        payload: id
    });
}
export const addProduct = post => async dispatch => {
    const resp = await axios.post(`http://localhost:5000/products/`, post);
    dispatch({
        type: ADD_PRODUCT,
        payload: resp.data
    });
}
export const updateProduct = product => async dispatch => {
    const resp = await axios.put(`http://localhost:5000/products/${product.id}`, product);
    dispatch({
        type: UPDATE_PRODUCT,
        payload: resp.data
    });
}