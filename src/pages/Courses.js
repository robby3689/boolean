import React from "react";
import { useNavigate } from "react-router-dom";
import "./Courses.css";

const courses = [
  {
    id: "java",
    title: "Java",
    description: "Master OOP principles, Spring Boot, and backend logic.",
  },
  {
    id: "cloud",
    title: "Cloud Computing",
    description: "AWS, Azure, CI/CD, monitoring, and DevOps basics.",
  },
  {
    id: "react",
    title: "React",
    description: "Component-based frontend development using hooks and routing.",
  },
  {
    id: "aws",
    title: "AWS",
    description: "Hands-on AWS IAM, EC2, RDS, Lambda, and best practices.",
  },
];

export default function Courses() {
  const navigate = useNavigate();

  const goToCourse = (id) => {
    navigate(`/courses/${id}`);
  };

  return (
    <div className="courses-container">
      <h2>Our Courses</h2>
      <div className="course-grid">
        {courses.map((course) => (
          <div
            key={course.id}
            className="course-card"
            onClick={() => goToCourse(course.id)}
          >
            <h3>{course.title}</h3>
            <p>{course.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
