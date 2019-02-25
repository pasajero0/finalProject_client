import axios from 'axios';

export const FETCH_PRODUCTS_PENDING = 'FETCH_PRODUCTS_PENDING';
export const FETCH_PRODUCTS_FULFILLED = 'FETCH_PRODUCTS_FULFILLED';
export const FETCH_PRODUCTS_REJECTED = 'FETCH_PRODUCTS_REJECTED';

export function fetchProducts() {
    return dispatch => {
        dispatch({
            type: FETCH_PRODUCTS_PENDING,
        });
        axios.get('../api/products.json')
            .then(res => res.data)
            .then(data => {
                let productsList = {
                    productsList: data
                };
                // for (let key in productsList) {
                //     productsList[key] = productsList[key].filter((item) => {
                //         return item.gender === "woman" ? item : null
                //     })
                // }

                dispatch({
                    type: FETCH_PRODUCTS_FULFILLED,
                    payload: productsList
                })

            })
            .catch(err => dispatch({
                type: FETCH_PRODUCTS_REJECTED,
                payload: err
            }))
    }
}

