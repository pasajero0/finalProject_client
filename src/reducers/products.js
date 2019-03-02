import {
  FETCH_PRODUCTS_PENDING,
  FETCH_PRODUCTS_FULFILLED,
  FETCH_PRODUCTS_REJECTED,
  FETCH_PRODUCT_PENDING,
  FETCH_PRODUCT_FULFILLED,
  FETCH_PRODUCT_REJECTED
} from '../actions/products';


const initialState = {
  productData: {
    slug: '',
    pictures: [],
    imagesDir: '',
    name: '',
    prices: {
      retail: 0,
      sale: 0
    }
  },
  productsList: {
    records: [],
    page: 1,
    perPage: 10,
    count: 0,
    pagesTotal: 0,
  },
  isFetching: false,
  imagesDir: '/product-images'
};

function products(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCT_PENDING:
    case FETCH_PRODUCTS_PENDING:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_PRODUCT_FULFILLED:
      return {
        ...state,
        productData: action.payload,
        isFetching: false
      };
    case FETCH_PRODUCTS_FULFILLED:
      return {
        ...state,
        productsList: action.payload,
        isFetching: false
      };
    case FETCH_PRODUCT_REJECTED:
    case FETCH_PRODUCTS_REJECTED:
      return { ...state };
    default:
      return { ...state };
  }
}

export default products;
