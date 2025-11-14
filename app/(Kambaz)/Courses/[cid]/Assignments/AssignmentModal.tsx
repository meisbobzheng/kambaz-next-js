"use client";
import { Assignment } from "@/app/types";
import {
  Button,
  FormControl,
  FormGroup,
  FormLabel,
  Modal,
} from "react-bootstrap";

export default function AssignmentModal({
  show,
  handleClose,
  assignment,
  setAssignmentName,
  setAssignmentDescription,
  setAssignmentPoints,
  setAssignmentDueDate,
  setAssignmentAvailableFrom,
  addAssignment,
}: {
  show: boolean;
  assignment: Assignment;
  handleClose: () => void;
  setAssignmentName: (name: string) => void;
  setAssignmentDescription: (description: string) => void;
  setAssignmentPoints: (points: number) => void;
  setAssignmentDueDate: (dueDate: string) => void;
  setAssignmentAvailableFrom: (availableFrom: string) => void;
  addAssignment: () => void;
}) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Assignment</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormGroup>
          <FormLabel>Assignment Name</FormLabel>
          <FormControl
            value={assignment.title}
            placeholder="Assignment Name"
            onChange={(e) => setAssignmentName(e.target.value)}
          />
        </FormGroup>
        <br />
        <FormGroup>
          <FormLabel>Assignment Description</FormLabel>
          <FormControl
            as="textarea"
            value={assignment.description}
            placeholder="Assignment Description"
            onChange={(e) => setAssignmentDescription(e.target.value)}
          />
        </FormGroup>
        <br />
        <FormGroup>
          <FormLabel>Points</FormLabel>
          <FormControl
            type="number"
            value={assignment.points}
            placeholder="Points"
            onChange={(e) => setAssignmentPoints(Number(e.target.value))}
          />
        </FormGroup>
        <br />
        <FormGroup>
          <FormLabel>Due Date</FormLabel>
          <FormControl
            type="datetime-local"
            value={assignment.dueDate}
            onChange={(e) => setAssignmentDueDate(e.target.value)}
          />
        </FormGroup>
        <br />
        <FormGroup>
          <FormLabel>Available From</FormLabel>
          <FormControl
            type="datetime-local"
            value={assignment.availableFrom}
            onChange={(e) => setAssignmentAvailableFrom(e.target.value)}
          />
        </FormGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={addAssignment}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
