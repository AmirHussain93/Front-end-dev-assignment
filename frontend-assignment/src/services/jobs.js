import axios from "axios"
import { getJobs, getJobsError, getJobsSuccess, getSkillsRelatedToJob, getSkillsRelatedToJobError, getSkillsRelatedToJobSuccess } from "../store/actions/jobs"

export class JobsService {
    static getJobs = (jobname) => {
        return (dispatch) => {
            dispatch(getJobs())
            axios.get(`http://api.dataatwork.org/v1/jobs/autocomplete?contains=${jobname}`)
                .then(response => {
                    dispatch(getJobsSuccess(response.data))
                }).catch(error => {
                    dispatch(getJobsError(error))
                })
        }
    }

    static getSkills = (id) => {
        return (dispatch) => {
            dispatch(getSkillsRelatedToJob())
            axios.get(`http://api.dataatwork.org/v1/jobs/${id}/related_skills`)
                .then(response => {
                    dispatch(getSkillsRelatedToJobSuccess(response.data))
                }).catch(error => {
                    dispatch(getSkillsRelatedToJobError(error))
                })
        }
    }
}