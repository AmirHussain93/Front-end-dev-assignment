import React, { useEffect, useState } from 'react';
import Tab from './Tab';

const Tabs = (props) => {
    const { children } = props
    const [ activetab, setActiveTab ] = useState("")

    useEffect(() => {
        setActiveTab(children[0].props.label)
    }, [children])

    const onClickTabItem = (tab) => {
        console.log(tab)
        setActiveTab(tab);
    };

    return (
        <div className="tabs">
          <ol className="tab-list">
            {children.map((child) => {
              const { label } = child.props;

              return (
                <Tab
                  activeTab={activetab}
                  key={label}
                  label={label}
                  onTabClick={onClickTabItem}
                />
              );
            })}
          </ol>
          <div className="tab-content">
            {children.map((child) => {
              if (child.props.label !== activetab) return undefined;
              return child.props.children;
            })}
          </div>
      </div>
    )
}

export default Tabs