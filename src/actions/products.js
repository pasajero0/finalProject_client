import axios from 'axios';

export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';

export function fetchAllProducts() {
    return dispatch => {
        dispatch({
            type: FETCH_PRODUCTS_REQUEST,
        });
        setTimeout(() => {
            axios.get('../api/products.json')
                .then(res => res.data)
                .then(data => {
                    let productsList = {
                        productsList: data
                    };

                    dispatch({
                        type: FETCH_PRODUCTS_SUCCESS,
                        payload: productsList
                    })

                })
                .catch(err => console.log(err))
        }, 3000);
    }
}

