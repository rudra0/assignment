import {  
  ADD_TO_CART, 
  DELETE_FROM_CART 
} from './cartTypes'

const initialState = {
  items: []
}

const cartReducer = (state = initialState, action) => {
  switch(action.type){
    case ADD_TO_CART: 
      return {
        items: [...state.items, action.payload]
      }
    case DELETE_FROM_CART: 
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      }
    default: return state
  }
}

export default cartReducer