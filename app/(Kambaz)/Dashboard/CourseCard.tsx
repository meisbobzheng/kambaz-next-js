import Link from "next/link";
import {
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Col,
} from "react-bootstrap";

type CourseCardProps = {
  cid: string;
  title: string;
  description: string;
  image: string;
};

export default function CourseCard({
  cid,
  title,
  description,
  image,
}: CourseCardProps) {
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
          </CardBody>
        </Link>
      </Card>
    </Col>
  );
}
