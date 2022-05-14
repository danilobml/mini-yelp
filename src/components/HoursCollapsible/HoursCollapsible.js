import React, { useEffect, useState } from "react";
import useCollapse from "react-collapsed";
import "./HoursCollapsible.css";

export default function HoursCollapsible({ hours }) {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  const [openClosed, setOpenClosed] = useState("closed");


  const openClose = () => {
    return "open"
  }; 

/*    const setOpen = () => {
    setOpenClosed("open");
  };  */

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
  const timeNow1 = date1.getHours() + ":" + date1.getMinutes() + ":00";
  //console.log(timeNow1.length);
  const timeNow=timeNow1.length==8?timeNow1:"0"+timeNow1;
  let today = days[date1.getDay()];
  let state="closed";


  const currentDayOpen = (day, time, num) => {
    //console.log(num);
    //console.log(today);
    
    const startTime = time ? time.substring(0, 5) + ":00" : "";
    const endTime = time ? time.substring(6, 11) + ":00" : "";

/*     console.log(timeNow);
    console.log(startTime);
    console.log(endTime); 
    console.log(timeNow >= startTime);  */
    if (num==1&&day == today && timeNow <= endTime && timeNow >= startTime) {
      state = "open";
    } else {
      state = "closed";
    }
    //console.log(state);
    
   return state;
   
  };
  useEffect(() => {
    //console.log(state);     
      if(state=="open"){setOpenClosed("open")};
     // console.log(openClosed);
}, [state]);
  

  return (
    <div>
      <div className="collapsible">
        <div id="hours" className="header" {...getToggleProps()}>
          {isExpanded
            ? "Opening hours ⬆️ (" + openClosed+ ")"
            : "Opening hours ⬇️ (" + openClosed+ ")"}
        </div>    <div {...getCollapseProps()}>
          <div className="content">
            {Object.keys(hours).map((x, index) => (
              <p key={index} className={x === today?currentDayOpen(x, hours[x],Object.keys(hours).length-index):""}>
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
