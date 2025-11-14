"use client";

import { Course, Enrollment, User } from "@/app/types";
import { useEffect, useState } from "react";
import { Button, FormControl, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import * as client from "../Courses/client";
import { deleteCourse, setCourses } from "../Courses/reducer";
import * as enrollmentsClient from "../Enrollments/client";
import { setEnrollments } from "../Enrollments/reducer";
import CourseCard from "./CourseCard";

export default function Dashboard() {
  const { currentUser } = useSelector(
    (state: { accountReducer: { currentUser: User } }) => state.accountReducer
  );

  const { enrollments } = useSelector(
    (state: { enrollmentsReducer: { enrollments: Enrollment[] } }) =>
      state.enrollmentsReducer
  );

  const { courses } = useSelector(
    (state: { coursesReducer: { courses: Course[] } }) => state.coursesReducer
  );

  const dispatch = useDispatch();
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

  const [showAllCourses, setShowAllCourses] = useState(false);

  const isFaculty = currentUser?.role === "FACULTY";

  const deleteCourseDispatch = (courseId: string) => {
    dispatch(deleteCourse(courseId));
  };

  const handleEnroll = async (courseId: string) => {
    if (!currentUser) return;
    try {
      console.log("Enrolling in course:", courseId);
      const newEnrollment = await enrollmentsClient.enrollInCourse(courseId);
      console.log("Enrollment successful:", newEnrollment);
      dispatch(setEnrollments([...enrollments, newEnrollment]));
    } catch (error) {
      console.error("Error enrolling in course:", error);
    }
  };

  const handleUnenroll = async (courseId: string) => {
    if (!currentUser) return;
    try {
      console.log("Unenrolling from course:", courseId);
      await enrollmentsClient.unenrollFromCourse(courseId);
      console.log("Unenrollment successful");
      dispatch(
        setEnrollments(
          enrollments.filter(
            (e: Enrollment) =>
              !(e.user === currentUser._id && e.course === courseId)
          )
        )
      );
    } catch (error) {
      console.error("Error unenrolling from course:", error);
    }
  };

  const isEnrolled = (courseId: string) => {
    return enrollments.some(
      (enrollment: Enrollment) =>
        enrollment.user === currentUser?._id && enrollment.course === courseId
    );
  };

  // Filter courses based on showAllCourses toggle
  const displayedCourses = showAllCourses
    ? courses
    : courses.filter((course: Course) => isEnrolled(course._id));

  const enrolledCoursesCount = courses.filter((course: Course) =>
    isEnrolled(course._id)
  ).length;

  const onAddNewCourse = async () => {
    const newCourse = await client.createCourse(course);
    dispatch(setCourses([...courses, newCourse]));
  };

  const fetchCourses = async () => {
    try {
      const courses = await client.fetchAllCourses();
      dispatch(setCourses(courses));
    } catch (error) {
      console.error(error);
    }
  };

  const fetchEnrollments = async () => {
    if (!currentUser) return;
    try {
      console.log("Fetching enrollments for user:", currentUser._id);
      const enrollments = await enrollmentsClient.findEnrollmentsForUser(
        currentUser._id
      );
      console.log("Enrollments fetched:", enrollments);
      dispatch(setEnrollments(enrollments));
    } catch (error) {
      console.error("Error fetching enrollments:", error);
    }
  };

  useEffect(() => {
    if (currentUser) {
      fetchCourses();
      fetchEnrollments();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser]);

  const onDeleteCourse = async (courseId: string) => {
    const status = await client.deleteCourse(courseId);
    dispatch(setCourses(courses.filter((course) => course._id !== courseId)));
  };
  const onUpdateCourse = async () => {
    await client.updateCourse(course);
    dispatch(
      setCourses(
        courses.map((c) => {
          if (c._id === course._id) {
            return course;
          } else {
            return c;
          }
        })
      )
    );
  };

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      {isFaculty && (
        <>
          <h5>
            New Course
            <Button
              variant="primary"
              className="float-end"
              id="wd-add-new-course-click"
              onClick={onAddNewCourse}
            >
              Add
            </Button>
            <Button
              variant="warning"
              className="float-end me-2"
              onClick={onUpdateCourse}
              id="wd-update-course-click"
            >
              Update
            </Button>
          </h5>
          <br />
          <FormControl
            value={course.name}
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
            className="mb-2"
          />
          <FormControl
            value={course.description}
            onChange={(e) =>
              setCourse({ ...course, description: e.target.value })
            }
            as="textarea"
            rows={3}
          />
          <hr />
        </>
      )}
      <h2 id="wd-dashboard-published">
        Published Courses ({enrolledCoursesCount})
        <Button
          variant="primary"
          className="float-end"
          id="wd-enrollments-btn"
          onClick={() => setShowAllCourses(!showAllCourses)}
        >
          {showAllCourses ? "My Courses" : "Enrollments"}
        </Button>
      </h2>
      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {displayedCourses.map((course) => (
            <CourseCard
              key={course._id}
              course={course}
              setCourse={setCourse}
              deleteCourse={onDeleteCourse}
              isEnrolled={isEnrolled(course._id)}
              onEnroll={handleEnroll}
              onUnenroll={handleUnenroll}
              isFaculty={isFaculty}
            />
          ))}
        </Row>
      </div>
    </div>
  );
}
