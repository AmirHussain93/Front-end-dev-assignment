import { combineReducers } from 'redux'
import { skills } from './reducer/skills'

const rootReducer = combineReducers({
    skills: skills
})

export default rootReducer
