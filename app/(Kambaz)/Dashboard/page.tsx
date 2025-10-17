import { Row } from "react-bootstrap";
import CourseCard from "./CourseCard";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          <CourseCard
            cid="1234"
            title="CS1234 React JS"
            description="Full Stack software developer"
            image="/images/react.png"
          />
          <CourseCard
            cid="1234"
            title="CS1111 Intro to Python"
            description="Learn Python"
            image="/images/python.png"
          />
          <CourseCard
            cid="1234"
            title="CS1112 Intro to Python 2"
            description="Learn Python 2"
            image="/images/python.png"
          />
          <CourseCard
            cid="1234"
            title="CS1210 Co-Op Class"
            description="How to get a dang job"
            image="/images/job.png"
          />
          <CourseCard
            cid="1234"
            title="FI1212 Personal Finance"
            description="Saving for retirement"
            image="/images/money.png"
          />
          <CourseCard
            cid="1234"
            title="CY1234 Foundation of Cybersecurity"
            description="Cybersecurity for dummies"
            image="/images/cyber.png"
          />
          <CourseCard
            cid="1234"
            title="ME1122 Mechanical Concepts"
            description="Engineering is easy"
            image="/images/engineering.png"
          />
        </Row>
      </div>
    </div>
  );
}
