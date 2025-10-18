import { Row } from "react-bootstrap";
import * as db from "../Database";
import CourseCard from "./CourseCard";

export default function Dashboard() {
  const courses = db.courses;

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">
        Published Courses ({courses.length})
      </h2>{" "}
      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {courses.map((course) => (
            <CourseCard
              key={course._id}
              cid={course._id}
              title={course.name}
              description={course.description}
              image={course.imageUrl}
            />
          ))}
        </Row>
      </div>
    </div>
  );
}
