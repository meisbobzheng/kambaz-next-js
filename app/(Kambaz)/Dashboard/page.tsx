"use client";
import { Course } from "@/app/types";
import { useState } from "react";
import { FormControl, Row } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import * as db from "../Database";
import CourseCard from "./CourseCard";

export default function Dashboard() {
  const [courses, setCourses] = useState(db.courses);
  const [course, setCourse] = useState<Course>({
    _id: "0",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    imageUrl: "/images/reactjs.jpg",
    description: "New Description",
    author: "0",
    department: "New Department",
    credits: 4,
  });
  const updateCourse = () => {
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };

  const addNewCourse = () => {
    const newCourse = { ...course, _id: uuidv4() };
    setCourses([...courses, newCourse]);
  };
  const deleteCourse = (courseId: string) => {
    setCourses(courses.filter((course) => course._id !== courseId));
  };

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h5>
        New Course
        <button
          className="btn btn-primary float-end"
          id="wd-add-new-course-click"
          onClick={addNewCourse}
        >
          {" "}
          Add{" "}
        </button>
        <button
          className="btn btn-warning float-end me-2"
          onClick={updateCourse}
          id="wd-update-course-click"
        >
          Update{" "}
        </button>
      </h5>
      <br />
      <FormControl
        value={course.name}
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
        className="mb-2"
      />
      <FormControl
        value={course.description}
        onChange={(e) => setCourse({ ...course, description: e.target.value })}
        as="textarea"
        rows={3}
      />
      <hr />
      <h2 id="wd-dashboard-published">
        Published Courses ({courses.length})
      </h2>{" "}
      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {courses.map((course) => (
            <CourseCard
              key={course._id}
              course={course}
              setCourse={setCourse}
              deleteCourse={deleteCourse}
            />
          ))}
        </Row>
      </div>
    </div>
  );
}
