import axios from 'axios'
import { getJobsRelatedToSkill, getJobsRelatedToSkillError, getJobsRelatedToSkillSuccess, getSkills, getSkillsError, getSkillsSuccess } from '../store/actions/skills'

export class SkillsService {
    static getskills = (skillname) => {
        return (dispatch) => {
            dispatch(getSkills())
            axios.get(`http://api.dataatwork.org/v1/skills/autocomplete?contains=${skillname}`)
                .then(response => {
                    dispatch(getSkillsSuccess(response.data))
                }).catch(error => {
                    dispatch(getSkillsError(error))
                })
        }
    }

    static getJobs = (id) => {
        return (dispatch) => {
            dispatch(getJobsRelatedToSkill())
            axios.get(`http://api.dataatwork.org/v1/skills/${id}/related_jobs`)
                .then(response => {
                    dispatch(getJobsRelatedToSkillSuccess(response.data))
                }).catch(error => {
                    dispatch(getJobsRelatedToSkillError(error))
                })
        }
    }
}