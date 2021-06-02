import { actionTypes } from "../constants"

export const getJobs = () => {
    return {
        type: actionTypes.JOBS_AUTOCOMPLETE
    }
}

export const getJobsSuccess = data => {
    return {
        type: actionTypes.JOBS_AUTOCOMPLETE_SUCCESS,
        payload: data
    }
}

export const getJobsError = error => {
    return {
        type: actionTypes.JOBS_AUTOCOMPLETE_ERROR,
        payload: error
    }
}

export const getSkillsRelatedToJob = () => {
    return {
        type: actionTypes.SKILLS_RELATED_TO_JOB
    }
}

export const getSkillsRelatedToJobSuccess = data => {
    return {
        type: actionTypes.SKILLS_RELATED_TO_JOB_SUCCESS,
        payload: data
    }
}

export const getSkillsRelatedToJobError = error => {
    return {
        type: actionTypes.SKILLS_RELATED_TO_JOB_ERROR,
        payload: error
    }
}