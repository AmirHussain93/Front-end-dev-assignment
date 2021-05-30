import React from 'react';

const Jobs = () => {
    return (
        <>
            <div className="search-box">
                <input type="text" placeholder="Enter skillname...." name="search" />
                <button type="submit">Search Jobs</button>
            </div>
        </>
    )
}

export default Jobs
