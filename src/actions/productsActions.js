import { SHOW_PRODUCTS } from './types';
import axios from 'axios';

export const showProducts = () => async dispatch => {
    const resp = await axios.get('http://localhost:5000/products');
    dispatch({
        type: SHOW_PRODUCTS,
        payload: resp.data
    });
}