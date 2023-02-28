import React from "react";
import CourseCard from "./CourseCard";
import "../styling/courseList.css";
let courseData = [
  {
    id: "BBpAmxU_NQo",
    duration: "1H18M43S",
    title: "Data Structures and Algorithms for Beginners",
    link: "https://www.youtube.com/watch?v=BBpAmxU_NQo",
    thumbnail: "https://i.ytimg.com/vi/BBpAmxU_NQo/hqdefault.jpg",
  },
  {
    id: "ZzaPdXTrSb8",
    duration: "1H22M56S",
    title: "C++ Tutorial for Beginners - Learn C++ in 1 Hour",
    link: "https://www.youtube.com/watch?v=ZzaPdXTrSb8",
    thumbnail: "https://i.ytimg.com/vi/ZzaPdXTrSb8/hqdefault.jpg",
  },
  {
    id: "7eh4d6sabA0",
    duration: "49M43S",
    title: "Python Machine Learning Tutorial (Data Science)",
    link: "https://www.youtube.com/watch?v=7eh4d6sabA0",
    thumbnail: "https://i.ytimg.com/vi/7eh4d6sabA0/hqdefault.jpg",
  },
  {
    id: "pg19Z8LL06w",
    duration: "1H7M39S",
    title: "Docker Crash Course for Absolute Beginners [NEW]",
    link: "https://www.youtube.com/watch?v=pg19Z8LL06w",
    thumbnail: "https://i.ytimg.com/vi/pg19Z8LL06w/hqdefault.jpg",
  },
  {
    id: "Geq60OVyBPg",
    duration: "1H16M57S",
    title:
      "Software Testing Tutorial - Learn Unit Testing and Integration Testing",
    link: "https://www.youtube.com/watch?v=Geq60OVyBPg",
    thumbnail: "https://i.ytimg.com/vi/Geq60OVyBPg/hqdefault.jpg",
  },
  {
    id: "NU_1StN5Tkk",
    duration: "1H20M1S",
    title: "Design Patterns in Plain English | Mosh Hamedani",
    link: "https://www.youtube.com/watch?v=NU_1StN5Tkk",
    thumbnail: "https://i.ytimg.com/vi/NU_1StN5Tkk/hqdefault.jpg",
  },
  {
    id: "IJDJ0kBx2LM",
    duration: "1H51M36S",
    title: "Recursion in Programming - Full Course",
    link: "https://www.youtube.com/watch?v=IJDJ0kBx2LM",
    thumbnail: "https://i.ytimg.com/vi/IJDJ0kBx2LM/hqdefault.jpg",
  },
  {
    id: "kqtD5dpn9C8",
    duration: "1H6S",
    title: "Python for Beginners - Learn Python in 1 Hour",
    link: "https://www.youtube.com/watch?v=kqtD5dpn9C8",
    thumbnail: "https://i.ytimg.com/vi/kqtD5dpn9C8/hqdefault.jpg",
  },
  {
    id: "s_o8dwzRlu4",
    duration: "1H12M4S",
    title: "Kubernetes Crash Course for Absolute Beginners [NEW]",
    link: "https://www.youtube.com/watch?v=s_o8dwzRlu4",
    thumbnail: "https://i.ytimg.com/vi/s_o8dwzRlu4/hqdefault.jpg",
  },
  {
    id: "pTFZFxd4hOI",
    duration: "56M4S",
    title: "Docker Tutorial for Beginners",
    link: "https://www.youtube.com/watch?v=pTFZFxd4hOI",
    thumbnail: "https://i.ytimg.com/vi/pTFZFxd4hOI/hqdefault.jpg",
  },
  {
    id: "DZBGEVgL2eE",
    duration: "33M36S",
    title: "Mongoose Crash Course - Beginner Through Advanced",
    link: "https://www.youtube.com/watch?v=DZBGEVgL2eE",
    thumbnail: "https://i.ytimg.com/vi/DZBGEVgL2eE/hqdefault.jpg",
  },
  {
    id: "-0exw-9YJBo",
    duration: "57M34S",
    title: "Learn The MERN Stack - Express & MongoDB Rest API",
    link: "https://www.youtube.com/watch?v=-0exw-9YJBo",
    thumbnail: "https://i.ytimg.com/vi/-0exw-9YJBo/hqdefault.jpg",
  },
];
const CourseList = () => {
  return (
    <div id="course-list-container">
      {courseData.map(({ id, title, duration, link, thumbnail }) => (
        <CourseCard
          title={title}
          duration={duration}
          link={link}
          thumbnail={thumbnail}
          key={id}
        />
      ))}
    </div>
  );
};

export default CourseList;
