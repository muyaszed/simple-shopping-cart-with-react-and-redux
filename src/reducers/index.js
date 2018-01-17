import cart from './cart'
import { combinReducer } from 'redux'

const rootReducer = combinReducer({
  cart
})

export default rootReducer
