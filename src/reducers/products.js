import {
    FETCH_PRODUCTS_PENDING,
    FETCH_PRODUCTS_FULFILLED,
    FETCH_PRODUCTS_REJECTED
} from '../actions/products';


const initialState = {
    productsList: [],
    isFetching: false
};

function products(state = initialState, action) {
    switch (action.type) {
        case 'FETCH_PRODUCTS_PENDING':
            return {
                ...state, isFetching: true
            };
        case 'FETCH_PRODUCTS_FULFILLED':
            return {...state, ...action.payload, isFetching: false};
        case 'FETCH_PRODUCTS_REJECTED':
            return {...state};
        default:
            return {...state}
    }
}

export default products