import React, { useState } from "react";
import "./timeline.css";
import AppWrap from "../appwrap";
import "react-vertical-timeline-component/style.min.css";
import { FaSchool, FaGraduationCap,FaAngleDown, FaAngleUp } from "react-icons/fa";
import timelineElements from "./timelineElements";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

function Timeline() {
  let schoolIconStyles = { background: "#06D6A0" };
  let collegeIconStyles = { background: "#f9c74f" };

  // Create a separate state for each element
  const [showContentArr, setShowContentArr] = useState(
    timelineElements.map((element) => false)
  );

  const toggleContent = (index) => {
    // Update the `showContent` value for the element at the given index
    const updatedArr = [...showContentArr];
    updatedArr[index] = !updatedArr[index];
    setShowContentArr(updatedArr);
  };

  return (
    <div id="div__comp">
      <h1 id="timeline__header">Education</h1>
      <VerticalTimeline id="time__line">
        {timelineElements.map((element, index) => {
          let isSchoolIcon = element.icon === "school";
          let showButton =
            element.buttonText !== undefined &&
            element.buttonText !== null &&
            element.buttonText !== "";
          return (
            <VerticalTimelineElement
              id="vertical__comp"
              key={element.key}
              date={element.date}
              dateClassName="date"
              iconStyle={isSchoolIcon ? schoolIconStyles : collegeIconStyles}
              icon={isSchoolIcon ? <FaSchool /> : <FaGraduationCap />}
            >
              <h3 className="vertical__timeline__element__title">
                {element.title}
              </h3>
              <h5 className="vertical__timeline__element__subtitle">
                {element.location}
              </h5>
              {showContentArr[index] && (
                  <p id="description">{element.description}</p>
              )}
                <div className={`timeline-button ${element.buttonClass}`} onClick={() => toggleContent(index)}>
                  {showContentArr[index] ? <FaAngleUp className="FaAngleUp"/> : <FaAngleDown className="FaAngleDown"/>}
                </div>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}
export default AppWrap(Timeline,"education");
