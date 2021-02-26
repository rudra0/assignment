import { combineReducers } from 'redux'
import cartReducer from './cart/cartReducer'
import productReducer from './products/productReducer'

const reducers = combineReducers({
  cart: cartReducer,
  products: productReducer 
})

export default reducers