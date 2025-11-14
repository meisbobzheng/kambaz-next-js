import Link from "next/link";
import { ListGroupItem } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { FaCheckCircle, FaEllipsisV } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";
import { PiNotebookFill } from "react-icons/pi";

type AssignmentListItemProps = {
  name: string;
  dueDate: string;
  availableUntil: string;
  points: number;
  aid: string;
  cid: string;
  deleteAssignment: (aid: string) => void;
};

export default function AssignmentListItem({
  name,
  dueDate,
  availableUntil,
  points,
  aid,
  cid,
  deleteAssignment,
}: AssignmentListItemProps) {
  return (
    <ListGroupItem className="wd-assignment-list-item">
      <div className="d-flex align-items-center">
        <div className="d-flex align-items-start me-3">
          <BsGripVertical className="me-2 fs-4 text-muted" />
          <PiNotebookFill className="fs-4 text-success" />
        </div>
        <div className="flex-grow-1">
          <Link
            href={`/Courses/${cid}/Assignments/${aid}`}
            className="wd-assignment-link text-decoration-none text-dark fw-bold"
          >
            {name}
          </Link>
          <div className="text-muted small">
            <span className="text-danger">Multiple Modules</span> |{" "}
            <b>Not available until</b> {availableUntil} |
          </div>
          <div className="text-muted small">
            <b>Due</b> {dueDate} | {points} pts
          </div>
        </div>
        <FaTrashCan
          className="text-danger me-2"
          onClick={() => deleteAssignment(aid)}
        />
        <FaCheckCircle className="text-success me-2" />
        <FaEllipsisV className="text-muted" />
      </div>
    </ListGroupItem>
  );
}
