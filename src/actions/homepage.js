import axios from 'axios';

export const CHANGE_PRODUCTS_GENDER_PENDING = 'CHANGE_PRODUCTS_GENDER_PENDING';
export const CHANGE_PRODUCTS_GENDER_FULFILLED = 'CHANGE_PRODUCTS_GENDER_FULFILLED';
export const CHANGE_PRODUCTS_GENDER_REJECTED = 'CHANGE_PRODUCTS_GENDER_REJECTED';

export function changeProductsGender() {
    return dispatch => {
        dispatch({
            type: CHANGE_PRODUCTS_GENDER_PENDING,
        });
        axios.get('../api/products.json')
            .then(res => res.data)
            .then(data => {
                let productsList = {
                    productsList: data
                };
                for (let key in productsList) {
                    productsList[key] = productsList[key].filter((item) => {
                        if (item.gender === "woman") {
                            return item
                        }
                    })
                }

                dispatch({
                    type: CHANGE_PRODUCTS_GENDER_FULFILLED,
                    payload: productsList
                })

            })
            .catch(err => dispatch({
                type: CHANGE_PRODUCTS_GENDER_REJECTED,
                payload: err
            }))
    }
}

