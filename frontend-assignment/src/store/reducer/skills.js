import { actionTypes } from '../constants'

const initilaState = {
    loading: false,
    jobsLoading: false,
    data: "",
    error: "",
    jobs: "",
    jobsError: ""
}

export  const skills = (state=initilaState, action) => {
    switch(action.type) {
        case actionTypes.SKILLS_AUTOCOMPLETE:
            return {
                ...state,
                loading: true,
                data: "",
                error: ""
            }
        case actionTypes.SKILLS_AUTOCOMPLETE_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: ""
            }
        case actionTypes.SKILLS_AUTOCOMPLETE_ERROR:
            return {
                ...state,
                loading: false,
                data: "",
                error: action.payload
            }
        case actionTypes.JOBS_RELATED_TO_SKILLS:
            return {
                ...state,
                jobsLoading: true,
                jobs: "",
                jobsError: ""
            }
        case actionTypes.JOBS_RELATED_TO_SKILLS_SUCCESS:
            return {
                ...state,
                jobsLoading: false,
                jobs: action.payload,
                jobsError: ""
            }
        case actionTypes.JOBS_RELATED_TO_SKILLS_ERROR:
            return {
                ...state,
                jobsLoading: false,
                jobs: "",
                jobsError: action.payload
            }
        default:
            return state
    }
}