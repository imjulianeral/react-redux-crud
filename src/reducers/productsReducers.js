import { SHOW_PRODUCTS } from '../actions/types';

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
    
        default:
            return state;
    }
}
