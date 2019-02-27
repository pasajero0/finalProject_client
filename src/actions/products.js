import axios from 'axios';

export const FETCH_PRODUCTS_PENDING = 'FETCH_PRODUCTS_PENDING';
export const FETCH_PRODUCTS_FULFILLED = 'FETCH_PRODUCTS_FULFILLED';
export const FETCH_PRODUCTS_REJECTED = 'FETCH_PRODUCTS_REJECTED';

export function fetchProducts(requestData) {
    return dispatch => {
        dispatch({
            type: FETCH_PRODUCTS_PENDING,
        });
        axios.get('../api/products.json', requestData)
            .then(res => res.data)
            .then(data => {
                // const products = JSON.parse(data.data);
                //console.log("==========================", products);
                if (data.success) {
                    dispatch({
                        type: FETCH_PRODUCTS_FULFILLED,
                        payload: data.data
                    })
                } else {
                    throw new Error ("Error")
                }
            })
            .catch(err => dispatch({
                type: FETCH_PRODUCTS_REJECTED,
                payload: err
            }))
    }
}

