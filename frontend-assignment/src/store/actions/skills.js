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

export const getJobsRelatedToSkill = () => {
    return {
        type: actionTypes.JOBS_RELATED_TO_SKILLS
    }
}

export const getJobsRelatedToSkillSuccess = data => {
    return {
        type: actionTypes.JOBS_RELATED_TO_SKILLS_SUCCESS,
        payload: data
    }
}

export const getJobsRelatedToSkillError = error => {
    return {
        type: actionTypes.JOBS_RELATED_TO_SKILLS_ERROR,
        payload: error
    }
}