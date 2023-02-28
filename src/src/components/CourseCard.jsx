import React from "react";
import "../styling/courseCard.css";
const CourseCard = ({ title, duration, link, thumbnail }) => {
  return (
    <div className="course-card">
      <a href={link} target="_blank">
        <span className="course-card-content">
          <img
            src={thumbnail}
            alt={`thumbnail for ${title}`}
            height="auto"
            width="320"
          />
          <p>{title}</p>
          <span className="duration">duration: {duration}</span>
        </span>
      </a>
    </div>
  );
};

export default CourseCard;
