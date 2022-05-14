import React, { useEffect, useState } from "react";
import useCollapse from "react-collapsed";
import "./HoursCollapsible.css";

export default function HoursCollapsible({ hours }) {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  const [openClosed, setOpenClosed] = useState("closed");

   const setOpen = () => {
    setOpenClosed("open");
  }; 

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const date1 = new Date();
  const timeNow = date1.getHours() + ":" + date1.getMinutes() + ":00";
  let today = days[date1.getDay()];
  let state="closed";


  const currentDayOpen = (day, time) => {
      
    //console.log(today);
    
    const startTime = time ? time.substring(0, 5) + ":00" : "";
    const endTime = time ? time.substring(6, 11) + ":00" : "";
    
    /*   console.log(timeNow);
    console.log(startTime);
    console.log(endTime); */
    if (day == today && timeNow <= endTime && timeNow >= startTime) {
      state = "open";
    } else {
      state = "closed";
    }
   // console.log(state);
    
   return state;
   
  };
  useEffect(() => {
     
      if(state==="open")setOpen();
      
}, [openClosed,state]);
  

  return (
    <div>
      <div className="collapsible">
        <div id="hours" className="header" {...getToggleProps()}>
          {isExpanded
            ? "Opening hours ⬆️ (" + openClosed + ")"
            : "Opening hours ⬇️ (" + openClosed  + ")"}
        </div>    <div {...getCollapseProps()}>
          <div className="content">
            {Object.keys(hours).map((x, index) => (
              <p key={index} className={x === today?currentDayOpen(x, hours[x]):""}>
                {x + ": " + hours[x]}
              </p>
            ))}{" "}
            <br />
            Click again to hide..
            <br />
          </div>
        </div>
      </div>
    </div>
  );
  
}
