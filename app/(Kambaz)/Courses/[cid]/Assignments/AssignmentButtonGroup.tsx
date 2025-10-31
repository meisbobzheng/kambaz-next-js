"use client";

import { Assignment } from "@/app/types";
import { useState } from "react";
import { Button, Form, FormControl, InputGroup } from "react-bootstrap";
import InputGroupText from "react-bootstrap/esm/InputGroupText";
import { FaSearch } from "react-icons/fa";
import AssignmentModal from "./AssignmentModal";

export default function AssignmentButtonGroup({
  assignment,
  setAssignment,
  addAssignment,
}: {
  assignment: Assignment;
  setAssignment: (assignment: Assignment) => void;
  addAssignment: () => void;
}) {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div
      id="wd-assignment-button-group"
      className="d-flex align-items-center gap-2"
    >
      <Form>
        <InputGroup style={{ width: 300 }}>
          <InputGroupText>
            <FaSearch />
          </InputGroupText>
          <FormControl
            type="text"
            placeholder="Search for Assignments"
            id="wd-search-assignment"
          />
        </InputGroup>
      </Form>
      <div className="flex-fill"></div>
      <div>
        <Button
          variant="secondary"
          size="lg"
          className="me-1"
          id="wd-add-assignment-group-btn"
        >
          + Group
        </Button>
        <Button
          variant="danger"
          size="lg"
          className="me-1"
          id="wd-add-assignment-btn"
          onClick={handleShow}
        >
          + Assignment
        </Button>
      </div>
      <AssignmentModal
        show={show}
        handleClose={handleClose}
        addAssignment={addAssignment}
        assignment={assignment}
        setAssignmentName={(name) =>
          setAssignment({ ...assignment, title: name })
        }
        setAssignmentDescription={(description) =>
          setAssignment({ ...assignment, description })
        }
        setAssignmentPoints={(points) =>
          setAssignment({ ...assignment, points })
        }
        setAssignmentDueDate={(dueDate) =>
          setAssignment({ ...assignment, dueDate })
        }
        setAssignmentAvailableFrom={(availableFrom) =>
          setAssignment({ ...assignment, availableFrom })
        }
      />
    </div>
  );
}
