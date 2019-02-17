import {
    FETCH_PRODUCTS_REQUEST,
    FETCH_PRODUCTS_SUCCESS
} from '../actions/products';


const initialState = {
    productsList: [],
    isFetching: false
};

function products(state = initialState, action) {
    switch (action.type) {
        case 'FETCH_PRODUCTS_REQUEST':
            return {
                ...state, isFetching: true
            };
        case 'FETCH_PRODUCTS_SUCCESS':
            return {...state, ...action.payload, isFetching: false};
        default:
            return {...state}
    }
}

export default products