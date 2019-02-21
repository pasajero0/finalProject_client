import axios from 'axios';

export const FETCH_PRODUCTS_PENDING = 'FETCH_PRODUCTS_PENDING';
export const FETCH_PRODUCTS_FULFILLED = 'FETCH_PRODUCTS_FULFILLED';

export function fetchAllProducts() {
    return dispatch => {
        dispatch({
            type: FETCH_PRODUCTS_PENDING,
        });
        // setTimeout(() => {
            axios.get('../api/products.json')
                .then(res => res.data)
                .then(data => {
                    let productsList = {
                        productsList: data
                    };

                    dispatch({
                        type: FETCH_PRODUCTS_FULFILLED,
                        payload: productsList
                    })

                })
                .catch(err => console.log(err))
        // }, 3000);
    }
}

