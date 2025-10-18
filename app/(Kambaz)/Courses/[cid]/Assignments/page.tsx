"use client";

import { Assignment } from "@/app/types";
import { useParams } from "next/navigation";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { BsGripVertical, BsPlus } from "react-icons/bs";
import { FaEllipsisV } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import * as db from "../../../Database";
import AssignmentButtonGroup from "./AssignmentButtonGroup";
import AssignmentListItem from "./AssignmentListItem";

export default function Assignments() {
  const { cid } = useParams() as { cid: string };
  const assignments = db.assignments;

  const filteredAssignments = assignments.filter(
    (assignment: Assignment) => assignment.course === cid
  );
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

        {filteredAssignments.map((assignment: Assignment) => (
          <AssignmentListItem
            key={assignment._id}
            name={assignment.title}
            dueDate="May 13 at 11:59pm"
            availableUntil="May 6 at 12:00am"
            points={100}
            aid={assignment._id}
            cid={cid}
          />
        ))}
      </ListGroup>
    </div>
  );
}
