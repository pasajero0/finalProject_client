import {
    CHANGE_PRODUCTS_GENDER_PENDING,
    CHANGE_PRODUCTS_GENDER_FULFILLED,
    CHANGE_PRODUCTS_GENDER_REJECTED
} from '../actions/homepage';


const initialState = {
    productsList: [],
    isFetching: false,
    isWoman: true,
    defaultUrl: "/women"
};

function homepage (state = initialState, action) {
    switch (action.type) {
        case 'CHANGE_PRODUCTS_GENDER_PENDING':
            return {
                ...state, isFetching: true
            };
        case 'CHANGE_PRODUCTS_GENDER_FULFILLED':
            return {...state, ...action.payload, isFetching: false};
        case 'CHANGE_PRODUCTS_GENDER_REJECTED':
            return {...state};
        default:
            return {...state}
    }
}

export default homepage

