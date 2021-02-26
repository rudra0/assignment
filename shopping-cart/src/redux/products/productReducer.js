import {
  GET_PRODUCTS_LOADING, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_ERROR, GET_CATEGORIES 
} from './productTypes'

const initialState = {
  loading: false,
  products: [],
  categories: [],
  error: null
}

const productReducer = (state = initialState, action) => {
  switch(action.type){
    case GET_PRODUCTS_LOADING: 
      return {
        ...state,
        loading: true
      }
    case GET_PRODUCTS_SUCCESS: 
      return {
        ...state,
        loading: false,
        products: action.payload,
        error: null
      }
    case GET_PRODUCTS_ERROR: 
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case GET_CATEGORIES: 
      return {
        ...state,
        loading: false,
        categories: action.payload
      }
    default: return state
  }
}

export default productReducer