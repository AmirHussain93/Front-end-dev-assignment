import { actionTypes } from '../constants'

const initilaState = {
    loading: false,
    data: "",
    error: ""
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
        default:
            return state
    }
}