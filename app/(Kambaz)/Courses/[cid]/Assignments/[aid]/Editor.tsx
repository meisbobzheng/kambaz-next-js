"use client";
import { Assignment } from "@/app/types";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import * as client from "../../../client";
import { setAssignments } from "../reducer";

export default function AssignmentEditor() {
  const { aid, cid } = useParams() as { aid: string; cid: string };

  const { assignments } = useSelector(
    (state: { assignmentsReducer: { assignments: Assignment[] } }) =>
      state.assignmentsReducer
  );

  const currentAssignment = assignments.find(
    (assignment: Assignment) => assignment._id === aid
  );

  const [assignment, setAssignment] = useState(currentAssignment);

  const dispatch = useDispatch();
  const router = useRouter();

  const fetchAssignments = async () => {
    try {
      console.log("Editor: Fetching assignments for course:", cid);
      const assignments = await client.findAssignmentsForCourse(cid as string);
      console.log("Editor: Assignments fetched:", assignments);
      dispatch(setAssignments(assignments));
    } catch (error) {
      console.error("Editor: Error fetching assignments:", error);
    }
  };

  const onUpdateAssignment = async () => {
    if (!assignment) return;
    try {
      console.log("Editor: Updating assignment:", assignment._id);
      await client.updateAssignment(assignment);
      const updatedAssignments = assignments.map((a: Assignment) =>
        a._id === assignment._id ? assignment : a
      );
      dispatch(setAssignments(updatedAssignments));
      console.log("Editor: Assignment updated successfully");
    } catch (error) {
      console.error("Editor: Error updating assignment:", error);
    }
  };

  useEffect(() => {
    if (cid) {
      fetchAssignments();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cid]);

  if (!assignment) return null;

  return (
    <div id="wd-assignments-editor" className="p-3">
      <Form>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="wd-name">Assignment Name</Form.Label>
          <Form.Control
            type="text"
            id="wd-name"
            defaultValue={assignment?.title || ""}
            onChange={(e) =>
              setAssignment({ ...assignment, title: e.target.value })
            }
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            as="textarea"
            id="wd-description"
            rows={4}
            defaultValue={assignment?.description || ""}
            onChange={(e) =>
              setAssignment({ ...assignment, description: e.target.value })
            }
          />
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2} htmlFor="wd-points">
            Points
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="number"
              id="wd-points"
              defaultValue={assignment?.points || 0}
              onChange={(e) =>
                setAssignment({
                  ...assignment,
                  points: parseInt(e.target.value),
                })
              }
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2} htmlFor="wd-group">
            Assignment Group
          </Form.Label>
          <Col sm={10}>
            <Form.Select
              id="wd-group"
              onChange={(e) =>
                setAssignment({ ...assignment, group: e.target.value })
              }
            >
              <option value="ASSIGNMENTS">ASSIGNMENTS</option>
              <option value="QUIZZES">QUIZZES</option>
              <option value="EXAMS">EXAMS</option>
              <option value="PROJECT">PROJECT</option>
            </Form.Select>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2} htmlFor="wd-display-grade-as">
            Display Grade as
          </Form.Label>
          <Col sm={10}>
            <Form.Select
              id="wd-display-grade-as"
              onChange={(e) =>
                setAssignment({ ...assignment, displayGradeAs: e.target.value })
              }
            >
              <option value="Percentage">Percentage</option>
              <option value="Points">Points</option>
              <option value="Letter Grade">Letter Grade</option>
              <option value="GPA Scale">GPA Scale</option>
            </Form.Select>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2} htmlFor="wd-submission-type">
            Submission Type
          </Form.Label>
          <Col sm={10}>
            <div className="border rounded p-3">
              <Form.Select
                id="wd-submission-type"
                className="mb-3"
                onChange={(e) =>
                  setAssignment({
                    ...assignment,
                    submissionType: e.target.value,
                  })
                }
              >
                <option value="Online">Online</option>
                <option value="Paper">Paper</option>
                <option value="External Tool">External Tool</option>
              </Form.Select>

              <div className="mb-3">
                <Form.Label className="fw-bold">
                  Online Entry Options
                </Form.Label>
                <Form.Check
                  type="checkbox"
                  id="wd-text-entry"
                  label="Text Entry"
                />
                <Form.Check
                  type="checkbox"
                  id="wd-website-url"
                  label="Website URL"
                  defaultChecked
                />
                <Form.Check
                  type="checkbox"
                  id="wd-media-recordings"
                  label="Media Recordings"
                />
                <Form.Check
                  type="checkbox"
                  id="wd-student-annotation"
                  label="Student Annotation"
                />
                <Form.Check
                  type="checkbox"
                  id="wd-file-upload"
                  label="File Uploads"
                />
              </div>
            </div>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>
            Assign
          </Form.Label>
          <Col sm={10}>
            <div className="border rounded p-3">
              <Form.Label htmlFor="wd-assign-to" className="fw-bold">
                Assign to
              </Form.Label>
              <Form.Control
                type="text"
                id="wd-assign-to"
                defaultValue="Everyone"
                className="mb-3"
                onChange={(e) =>
                  setAssignment({ ...assignment, assignTo: e.target.value })
                }
              />

              <Form.Label htmlFor="wd-due-date" className="fw-bold">
                Due
              </Form.Label>
              <Form.Control
                type="datetime-local"
                id="wd-due-date"
                defaultValue={assignment?.dueDate || ""}
                className="mb-3"
                onChange={(e) =>
                  setAssignment({ ...assignment, dueDate: e.target.value })
                }
              />

              <Row>
                <Col>
                  <Form.Label htmlFor="wd-available-from" className="fw-bold">
                    Available from
                  </Form.Label>
                  <Form.Control
                    type="datetime-local"
                    id="wd-available-from"
                    defaultValue={assignment?.availableFrom || ""}
                    onChange={(e) =>
                      setAssignment({
                        ...assignment,
                        availableFrom: e.target.value,
                      })
                    }
                  />
                </Col>
                <Col>
                  <Form.Label htmlFor="wd-available-until" className="fw-bold">
                    Until
                  </Form.Label>
                  <Form.Control
                    type="datetime-local"
                    id="wd-available-until"
                    defaultValue={assignment?.dueDate || ""}
                    onChange={(e) =>
                      setAssignment({
                        ...assignment,
                        availableUntil: e.target.value,
                      })
                    }
                  />
                </Col>
              </Row>
            </div>
          </Col>
        </Form.Group>

        <hr />

        <div className="d-flex justify-content-end gap-2">
          <Button
            variant="secondary"
            type="button"
            onClick={() =>
              router.push(`/Courses/${assignment.course}/Assignments`)
            }
          >
            Cancel
          </Button>
          <Button
            variant="danger"
            type="button"
            onClick={async () => {
              await onUpdateAssignment();
              router.push(`/Courses/${assignment.course}/Assignments`);
            }}
          >
            Save
          </Button>
        </div>
      </Form>
    </div>
  );
}
