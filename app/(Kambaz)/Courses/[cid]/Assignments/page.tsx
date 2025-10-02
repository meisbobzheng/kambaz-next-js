import { ListGroup, ListGroupItem } from "react-bootstrap";
import { BsGripVertical, BsPlus } from "react-icons/bs";
import { FaEllipsisV } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import AssignmentButtonGroup from "./AssignmentButtonGroup";
import AssignmentListItem from "./AssignmentListItem";

export default function Assignments() {
  return (
    <div id="wd-assignments" className="p-3">
      <AssignmentButtonGroup />

      <ListGroup id="wd-assignment-list" className="mt-3">
        <ListGroupItem className="p-3 bg-light">
          <div className="d-flex align-items-center">
            <BsGripVertical className="me-2 fs-4" />
            <IoMdArrowDropdown className="me-2" />
            <strong id="wd-assignments-title">ASSIGNMENTS</strong>
            <div className="ms-auto d-flex gap-2 align-items-center">
              <div className="text-muted border p-2 rounded-4 px-2">
                <span>40% of Total</span>
              </div>
              <BsPlus className="fs-4 text-muted" />
              <FaEllipsisV />
            </div>
          </div>
        </ListGroupItem>

        <AssignmentListItem
          name="A1"
          dueDate="May 13 at 11:59pm"
          availableUntil="May 6 at 12:00am"
          points={100}
        />
        <AssignmentListItem
          name="A2"
          dueDate="May 20 at 11:59pm"
          availableUntil="May 13 at 12:00am"
          points={100}
        />
        <AssignmentListItem
          name="A3"
          dueDate="May 27 at 11:59pm"
          availableUntil="May 20 at 12:00am"
          points={100}
        />
      </ListGroup>
    </div>
  );
}
