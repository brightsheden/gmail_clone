// @flow strict

import * as React from 'react';
import './SidebarOption.css'

function SideBarOptions({Icon, Title, number, selected}) {
    return (
        <div className={`sidebarOption  ${selected && "sidebarOption--active"}`}>
            <Icon />
            <h3>{Title}</h3>
            <p>{number}</p>
            
        </div>
    );
};

export default SideBarOptions;