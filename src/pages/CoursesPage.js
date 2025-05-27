
import React from 'react';
import './CoursesPage.css';

const courses = [
  {
    title: "AI & Machine Learning",
    description: "Learn Neural Networks to Deployment",
    image: "/images/ai.png",
  },
  {
    title: "Google Cloud Engineering",
    description: "Master GCP for DevOps and Cloud Projects",
    image: "/images/gcp.png",
  },
  {
    title: "Azure Data Engineering",
    description: "Get skilled in Azure Synapse & Data Factory",
    image: "/images/azure.png",
  },
];

const CoursesPage = () => {
  return (
    <div className="courses-page">
      <h2>Our Featured Courses</h2>
      <div className="courses-grid">
        {courses.map((course, index) => (
          <div key={index} className="course-card">
            <img src={course.image} alt={course.title} />
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <button>View Course</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
