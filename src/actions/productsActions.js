import { SHOW_PRODUCTS, DELETE_PRODUCT, ADD_PRODUCT, SHOW_SINGLE_PRODUCT, UPDATE_PRODUCT } from './types';
import axios from 'axios';

export const showProducts = () => async dispatch => {
    const resp = await axios.get('https://my-json-server.typicode.com/GeorgeSteel/JSON-Server-products/products');
    dispatch({
        type: SHOW_PRODUCTS,
        payload: resp.data
    });
}
export const showSingleProduct = id => async dispatch => {
    const resp = await axios.get(`https://my-json-server.typicode.com/GeorgeSteel/JSON-Server-products/products/${id}`);
    dispatch({
        type: SHOW_SINGLE_PRODUCT,
        payload: resp.data
    });
}
export const deleteProducts = id => async dispatch => {
    await axios.delete(`https://my-json-server.typicode.com/GeorgeSteel/JSON-Server-products/products/${id}`);
    dispatch({
        type: DELETE_PRODUCT,
        payload: id
    });
}
export const addProduct = post => async dispatch => {
    const resp = await axios.post(`https://my-json-server.typicode.com/GeorgeSteel/JSON-Server-products/products/`, post);
    dispatch({
        type: ADD_PRODUCT,
        payload: resp.data
    });
}
export const updateProduct = product => async dispatch => {
    const resp = await axios.put(`https://my-json-server.typicode.com/GeorgeSteel/JSON-Server-products/products/${product.id}`, product);
    dispatch({
        type: UPDATE_PRODUCT,
        payload: resp.data
    });
}