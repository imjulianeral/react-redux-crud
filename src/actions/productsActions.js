import { 
    ADD_PRODUCT, 
    ADD_PRODUCT_SUCCESS, 
    ADD_PRODUCT_ERROR,
    START_PRODUCTS_DOWNLOAD,
    PRODUCTS_DOWNLOAD_SUCCESS,
    PRODUCTS_DOWNLOAD_ERROR,
    PRODUCT_TO_DELETE,
    PRODUCT_DELETED_SUCCESS,
    PRODUCT_DELETED_ERROR,
    PRODUCT_TO_EDIT,
    PRODUCT_EDITED_SUCCESS,
    PRODUCT_EDITED_ERROR,
    START_EDITING_PRODUCT,
    EDITED_PRODUCT_SUCCESS,
    EDITED_PRODUCT_ERROR
 } from '../types';
import Swal from 'sweetalert2';

import clientAxios from '../config/axios';

// create a new product - Main function
export function createNewProductAction(product) {
    return (dispatch) => {
        dispatch(newProduct());
        clientAxios.post('/products', product)
                    .then(resp => dispatch(newProductSuccess(resp.data)))
                    .catch(err => dispatch(newProductError(err)));
    }
}

export const newProduct = () => ({
    type: ADD_PRODUCT
});
export const newProductSuccess = product => ({
    type: ADD_PRODUCT_SUCCESS,
    payload: product
});
export const newProductError = error => ({
    type: ADD_PRODUCT_ERROR,
    payload: error
});

// GET Products
export function getProductsAction() {
    return (dispatch) => {
        dispatch(startProductsDownload());
        
        clientAxios.get('/products')
                    .then(resp => {
                        dispatch(productsDownloadSuccess(resp.data));
                        Swal.fire(
                            'Changed!',
                            'The product has been updated!!!',
                            'success'
                        );
                    })
                    .catch(err => dispatch(productsDownloadError()));                    
    }
}

export const startProductsDownload = () => ({
    type: START_PRODUCTS_DOWNLOAD
});
export const productsDownloadSuccess = products => ({
    type: PRODUCTS_DOWNLOAD_SUCCESS,
    payload: products
});
export const productsDownloadError = () => ({
    type: PRODUCTS_DOWNLOAD_ERROR
});

// Function that deletes a specific product
export function deleteProductAction(id) {
    return (dispatch) => {
        dispatch(productToDelete());

        clientAxios.delete(`/products/${id}`)
                    .then(resp => dispatch(productDeleteSuccess(id)))
                    .catch(err => dispatch(productDeleteError()));
    }
}

export const productToDelete = () => ({
    type: PRODUCT_TO_DELETE
});
export const productDeleteSuccess = id => ({
    type: PRODUCT_DELETED_SUCCESS,
    payload: id
});
export const productDeleteError = () => ({
    type: PRODUCT_DELETED_ERROR
});

// Edit a product

export function editProductAction(id) {
    return (dispatch) => {
        dispatch(productToEdit());

        clientAxios.get(`/products/${id}`)
                    .then(resp => dispatch(productEditSuccess(resp.data)))
                    .catch(err => dispatch(productEditError()))
    }
}

export const productToEdit = () => ({
    type: PRODUCT_TO_EDIT
});
export const productEditSuccess = product => ({
    type: PRODUCT_EDITED_SUCCESS,
    payload: product
});
export const productEditError = () => ({
    type: PRODUCT_EDITED_ERROR
});

// Modifies a product in the API and the state
export function modProductAction(product) {
    return (dispatch) => {
        dispatch(startEditingProduct());

        clientAxios.put(`/products/${product.id}`, product)
                    .then(resp => dispatch(EditingProductSuccess(resp.data)))
                    .catch(err => dispatch(EditingProductError()))
    }
}

export const startEditingProduct = () => ({
    type: START_EDITING_PRODUCT
});
export const EditingProductSuccess = product => ({
    type: EDITED_PRODUCT_SUCCESS,
    payload: product
});
export const EditingProductError = () => ({
    type: EDITED_PRODUCT_ERROR
});