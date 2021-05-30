import { actionTypes } from "../constants"

export const getSkills = () => {
    return {
        type: actionTypes.SKILLS_AUTOCOMPLETE
    }
}

export const getSkillsSuccess = data => {
    return {
        type: actionTypes.SKILLS_AUTOCOMPLETE_SUCCESS,
        payload: data
    }
}

export const getSkillsError = error => {
    return {
        type: actionTypes.SKILLS_AUTOCOMPLETE_ERROR,
        payload: error
    }
}