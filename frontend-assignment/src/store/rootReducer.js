import { combineReducers } from 'redux'
import { jobs } from './reducer/jobs'
import { skills } from './reducer/skills'

const rootReducer = combineReducers({
    skills: skills,
    jobs: jobs
})

export default rootReducer
