import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import { SkillsService } from '../services/skills';
import useDebounce from './useDebounce';

const Jobs = (props) => {
    const { getSkills, list, getJobs, jobs, loading, error } = props;
    const [ search, setSearch ] = useState("")
    const [ selected, setSelected ] = useState(null);
    const [ options, setOptions ] = useState([]);
    const debouncedSearchTerm = useDebounce(search, 300);

    useEffect(() => {
          if (debouncedSearchTerm && debouncedSearchTerm.length >= 4) {
              getSkills(debouncedSearchTerm)
          }
    },[debouncedSearchTerm, getSkills]);

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
            getJobs(selected.value)
        }
    }, [selected, getJobs])

    const handleChange = (event) => {
        setSelected(event)
    }

    const handleInputChange = (value) => {
        setSearch(value)
    }

    return (
        <>
            {
                debouncedSearchTerm && debouncedSearchTerm.length < 4 && <div>Please enter atleast 4 characters.</div>
            }
            <Select 
                value={selected}
                isSearchable
                isClearable
                isLoading={loading}
                placeholder="Please enter skill with length greater than or equal to 4"
                onChange={handleChange}
                options={options}
                onInputChange={handleInputChange}
            />

            {
                error && selected && <div>No jobs available for the skill {selected.label}.</div>
            }

            {
                jobs && jobs.jobs.length > 0 && 
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Level</th>
                            <th>Importance</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            jobs.jobs.map((item) => {
                                return <tr key={item.job_uuid}>
                                    <td>{item.job_title}</td>
                                    <td>{item.level}</td>
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
        list: state.skills.data,
        jobs: state.skills.jobs,
        loading: state.skills.loading,
        error: state.skills.jobsError
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getSkills: (searchterm) => dispatch(SkillsService.getskills(searchterm)),
        getJobs: (id) => dispatch(SkillsService.getJobs(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Jobs)
