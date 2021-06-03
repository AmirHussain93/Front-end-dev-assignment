import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import { JobsService } from '../services/jobs';
import useDebounce from './useDebounce';


const Skills = (props) => {
    const { getJobs, getSkills, list, skills, loading, skillsError, skillsLoading } = props;
    const [ search, setSearch ] = useState("")
    const [ selected, setSelected ] = useState(null);
    const [ options, setOptions ] = useState([]);
    const debouncedSearchTerm = useDebounce(search, 300);

    useEffect(() => {
        if (debouncedSearchTerm && debouncedSearchTerm.length >= 4) {
            getJobs(debouncedSearchTerm)
        }
    },[debouncedSearchTerm, getJobs]);

    useEffect(() => {
        if (list.length > 0) {
            let newList = list.map(item => {
                return {
                    value: item.uuid,
                    label: item.suggestion
                }
            })
            setOptions(newList)
        }
    }, [list])

    useEffect(() => {
        if (selected) {
            getSkills(selected.value)
        }
    }, [selected, getSkills])

    const handleChange = (event) => {
        setSelected(event)
    }

    const handleInputChange = (value) => {
        setSearch(value)
    }

    const customStyles =  {
        noOptionsMessage: (provided, state) => {
            return {
                ...provided,
                color: "black"
            }
        },
    }

    const CustomLoader = () => <div className="dropdown-loader"></div>

    return (
        <>
            {
                debouncedSearchTerm && debouncedSearchTerm.length < 4 && 
                <div className="alert">Please enter atleast 4 characters.</div>
            }
            <Select 
                value={selected}
                isSearchable
                isClearable
                isLoading={loading}
                styles={customStyles}
                loadingMessage={() => CustomLoader()}
                placeholder="Please enter job with length greater than or equal to 4"
                onChange={handleChange}
                options={options}
                onInputChange={handleInputChange}
                className="react-select"
            />

            {
                skillsLoading && <div className="loader"></div>
            }
            {
                skillsError && selected && 
                <div className="job-skills-error">No jobs available for the skill {selected.label}. Please search something else.</div>
            }

            {
                skills && skills.skills.length > 0 && 
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Type</th>
                            <th>Importance</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            skills.skills.map((item) => {
                                return <tr key={item.skill_uuid}>
                                    <td>{item.skill_name}</td>
                                    <td>{item.skill_type}</td>
                                    <td>{item.importance}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            }
        </>
    )
}

const mapStateToProps = state => {
    return {
        list: state.jobs.data,
        skills: state.jobs.skills,
        skillsError: state.jobs.skillsError,
        loading: state.jobs.dataloading,
        skillsLoading: state.jobs.skillsLoading,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getJobs: (name) => dispatch(JobsService.getJobs(name)),
        getSkills: (jobid) => dispatch(JobsService.getSkills(jobid))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Skills)
