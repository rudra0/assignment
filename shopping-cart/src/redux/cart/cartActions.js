import { 
  ADD_TO_CART,
  DELETE_FROM_CART
} from './cartTypes'

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product
  }
}

export const deleteFromCart = (productId) => {
  return {
    type: DELETE_FROM_CART,
    payload: productId
  }
}

