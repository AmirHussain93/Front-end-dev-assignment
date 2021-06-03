import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import { SkillsService } from '../services/skills';
import useDebounce from './useDebounce';

const Jobs = (props) => {
    const { getSkills, list, getJobs, jobs, loading, error, jobsLoading } = props;
    console.log(loading)
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
                classNamePrefix="r-select"
                width="200px"
                value={selected}
                isSearchable
                isClearable
                isLoading={loading}
                loadingMessage={() => CustomLoader()}
                placeholder="Please enter skill with length greater than or equal to 4"
                onChange={handleChange}
                options={options}
                onInputChange={handleInputChange}
                styles={customStyles}
                className="react-select"
            />
             {
                jobsLoading && <div className="loader"></div>
            }

            {
                error && selected && 
                <div className="job-skills-error">No jobs available for the skill {selected.label}. Please search spmething else.</div>
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
        jobsLoading: state.skills.jobsLoading,
        error: state.skills.jobsError,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getSkills: (searchterm) => dispatch(SkillsService.getskills(searchterm)),
        getJobs: (id) => dispatch(SkillsService.getJobs(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Jobs)
