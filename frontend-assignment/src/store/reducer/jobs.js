import { actionTypes } from '../constants'

const initilaState = {
    dataloading: false,
    skillsLoading: false,
    data: "",
    error: "",
    skills: "",
    skillsError: ""
}

export  const jobs = (state=initilaState, action) => {
    switch(action.type) {
        case actionTypes.JOBS_AUTOCOMPLETE:
            return {
                ...state,
                dataloading: true,
                data: "",
                error: ""
            }
        case actionTypes.JOBS_AUTOCOMPLETE_SUCCESS:
            return {
                ...state,
                dataloading: false,
                data: action.payload,
                error: ""
            }
        case actionTypes.JOBS_AUTOCOMPLETE_ERROR:
            return {
                ...state,
                dataloading: false,
                data: "",
                error: action.payload
            }
        case actionTypes.SKILLS_RELATED_TO_JOB:
            return {
                ...state,
                skillsLoading: true,
                skills: "",
                skillsError: ""
            }
        case actionTypes.SKILLS_RELATED_TO_JOB_SUCCESS:
            return {
                ...state,
                skillsLoading: false,
                skills: action.payload,
                skillsError: ""
            }
        case actionTypes.SKILLS_RELATED_TO_JOB_ERROR:
            return {
                ...state,
                skillsLoading: false,
                skills: "",
                skillsError: action.payload
            }
        default:
            return state
    }
}