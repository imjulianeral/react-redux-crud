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

// Each reducer has his own state
const initialState = {
    products: [],
    error: null,
    loading: false,
    product: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_PRODUCT:
            return {
                ...state,
                error: null,
                loading: false
            }

        case ADD_PRODUCT_SUCCESS:
            return {
                ...state,
                error: null,
                products: [...state.products, action.payload]
            }

        case ADD_PRODUCT_ERROR:
            return {
                ...state,
                error: action.payload
            }
        
        case START_PRODUCTS_DOWNLOAD:
            return {
                ...state,
                loading: true,
                product: {}
            }

        case PRODUCTS_DOWNLOAD_SUCCESS:
            return {
                ...state,
                products: action.payload,
                loading: false,
                error: false,
                product: {}
            }
        case PRODUCTS_DOWNLOAD_ERROR:
            return {
                ...state,
                products: [],
                loading: false,
                error: true,
                product: {}
            }

        case PRODUCT_TO_DELETE:
            return {
                ...state,
                error: null
            }

        case PRODUCT_DELETED_SUCCESS:
            return {
                ...state,
                error: null,
                products: state.products.filter(product => product.id !== action.payload)
            }

        case PRODUCT_DELETED_ERROR:
            return {
                ...state,
                error: true
            }

        case PRODUCT_TO_EDIT:
            return {
                ...state,
                error: null
            }

        case PRODUCT_EDITED_SUCCESS:
            return {
                ...state,
                error: null,
                product: action.payload
            }

        case PRODUCT_EDITED_ERROR:
            return {
                ...state,
                error: true
            }

        case START_EDITING_PRODUCT:
            return {
                ...state,
                error: null
            }

        case EDITED_PRODUCT_SUCCESS:
            return {
                ...state,
                error: null,
                products: state.products.map(product => product.id === action.payload.id ? product = action.payload : product)
            }

        case EDITED_PRODUCT_ERROR:
            return {
                ...state,
                error: true
            }
    
        default:
            return state;
    }
}