import React from "react";
import useCollapse from 'react-collapsed';
import './HoursCollapsible.css';

export default function HoursCollapsible({hours}) {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  
  
  
    return (
    <div>
      <div className="collapsible">
        <div id="hours" className="header" {...getToggleProps()}>
          {isExpanded ? "Opening hours ⬆️" : "Opening hours ⬇️"}
        </div>
        <div {...getCollapseProps()}>
          <div className="content">
          {Object.keys(hours).map((x) => (
            <p>{x + ": " + hours[x]}</p>
          ))} <br />Click again to hide..<br />
         
          </div>
        </div>
      </div>
    </div>
  );
}
