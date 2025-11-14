"use client";

import { Assignment } from "@/app/types";
import { useParams } from "next/navigation";
import { useState } from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { BsGripVertical, BsPlus } from "react-icons/bs";
import { FaEllipsisV } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import AssignmentButtonGroup from "./AssignmentButtonGroup";
import AssignmentListItem from "./AssignmentListItem";
import { addAssignment, deleteAssignment } from "./reducer";

export default function Assignments() {
  const { cid } = useParams() as { cid: string };
  const { assignments } = useSelector(
    (state: { assignmentsReducer: { assignments: Assignment[] } }) =>
      state.assignmentsReducer
  );
  const [assignment, setAssignment] = useState<Assignment>({
    _id: "",
    title: "Assignment Title",
    description: "Assignment Description",
    course: cid,
    points: 0,
    dueDate: new Date().toISOString(),
    availableFrom: new Date().toISOString(),
  });
  const dispatch = useDispatch();

  const filteredAssignments = assignments.filter(
    (assignment: Assignment) => assignment.course === cid
  );
  return (
    <div id="wd-assignments" className="p-3">
      <AssignmentButtonGroup
        setAssignment={setAssignment}
        assignment={assignment}
        addAssignment={() =>
          dispatch(addAssignment({ ...assignment, _id: uuidv4() }))
        }
      />

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
            dueDate={new Date(assignment.dueDate).toLocaleDateString()}
            availableUntil={new Date(
              assignment.availableFrom
            ).toLocaleDateString()}
            points={assignment.points}
            aid={assignment._id}
            cid={cid}
            deleteAssignment={(aid) => dispatch(deleteAssignment(aid))}
          />
        ))}
      </ListGroup>
    </div>
  );
}
