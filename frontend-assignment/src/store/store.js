import { createStore, applyMiddleware } from 'redux'
import middleware from './middleware'
import rootReducer from './rootReducer'

export const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore)

const store = createStoreWithMiddleware(rootReducer)

export default store