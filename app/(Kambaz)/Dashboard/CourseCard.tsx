"use client";

import { Course } from "@/app/types";
import { useRouter } from "next/compat/router";
import Link from "next/link";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Col,
} from "react-bootstrap";

type CourseCardProps = {
  course: Course;
  deleteCourse: (courseId: string) => void;
  setCourse: (course: Course) => void;
};

export default function CourseCard({
  course,
  deleteCourse,
  setCourse,
}: CourseCardProps) {
  const nav = useRouter();

  const { _id: cid, name: title, description, imageUrl: image } = course;

  return (
    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
      <Card>
        <Link
          href={`/Courses/${cid}/Home`}
          className="wd-dashboard-course-link text-decoration-none text-dark"
        >
          <CardImg variant="top" src={image} width="100%" height={160} />
          <CardBody>
            <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
              {title}
            </CardTitle>
            <CardText
              className="wd-dashboard-course-description overflow-hidden"
              style={{ height: "100px" }}
            >
              {description}
            </CardText>
            <Button
              size="sm"
              onClick={() => {
                nav?.push(`/Courses/${cid}/Home`);
              }}
              className="btn"
              id="wd-go-to-course-click"
            >
              Go
            </Button>
            <Button
              variant="danger"
              size="sm"
              style={{ marginBottom: "10px" }}
              onClick={(event) => {
                event.preventDefault();
                deleteCourse(cid);
              }}
              className="btn btn-danger float-end"
              id="wd-delete-course-click"
            >
              Delete
            </Button>
            <Button
              size="sm"
              onClick={(event) => {
                event.preventDefault();
                setCourse(course);
              }}
              className="btn btn-warning float-end me-2"
              id="wd-update-course-click"
            >
              Update
            </Button>
          </CardBody>
        </Link>
      </Card>
    </Col>
  );
}
