import { SHOW_PRODUCTS, DELETE_PRODUCT, ADD_PRODUCT, SHOW_SINGLE_PRODUCT, UPDATE_PRODUCT } from '../actions/types';

// EACH reducer has his own state
const initialState = {
    products: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SHOW_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }
        case DELETE_PRODUCT:
            return {
                ...state,
                products: state.products.filter(product => product.id !== action.payload)
            }
        case ADD_PRODUCT:
            return {
                ...state,
                products: [...state, action.payload]
            }
    
        case SHOW_SINGLE_PRODUCT:
            return {
                ...state,
                product: action.payload
            }

        case UPDATE_PRODUCT:
            return {
                ...state,
                products: state.products.map(
                    product => product.id === action.payload.id
                    ? (product = action.payload)
                    : product
                )
            }
    
        default:
            return state;
    }
}
