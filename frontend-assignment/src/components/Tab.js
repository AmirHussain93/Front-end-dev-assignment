import React, { useEffect, useState } from  'react';
// import PropTypes from "prop-types";

const Tab = ({ label, activeTab, onTabClick }) => {
    const [ classname, setClassname ] = useState("");

    useEffect(() => {
        if(label === activeTab) {
            setClassname("tab-list-active")
        } else {
            setClassname("")
        }

    }, [label, activeTab])

    const handleCTabClick = () => {
        onTabClick(label)
    }

    return (
        <li className={`tab-list-item ${classname}`} onClick={handleCTabClick}>{label}</li>
    )
}

export default Tab