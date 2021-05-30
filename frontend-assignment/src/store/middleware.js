import thunk from 'redux-thunk'

const middleware = [thunk]

const { createLogger } = require('redux-logger');
const invariant = require('redux-immutable-state-invariant').default;

middleware.push(invariant());
middleware.push(createLogger({collapsed: true}));

export default middleware