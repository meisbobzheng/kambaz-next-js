"use client";
import { useParams } from "next/navigation";
import { Button, Col, Form, Row } from "react-bootstrap";
import * as db from "../../../../Database";

export default function AssignmentEditor() {
  const { aid } = useParams() as { aid: string };
  const assignment = db.assignments.find(
    (assignment: any) => assignment._id === aid
  );

  return (
    <div id="wd-assignments-editor" className="p-3">
      <Form>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="wd-name">Assignment Name</Form.Label>
          <Form.Control
            type="text"
            id="wd-name"
            defaultValue={assignment?.title || ""}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            as="textarea"
            id="wd-description"
            rows={4}
            defaultValue={assignment?.description || ""}
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
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2} htmlFor="wd-group">
            Assignment Group
          </Form.Label>
          <Col sm={10}>
            <Form.Select id="wd-group">
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
            <Form.Select id="wd-display-grade-as">
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
              <Form.Select id="wd-submission-type" className="mb-3">
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
              />

              <Form.Label htmlFor="wd-due-date" className="fw-bold">
                Due
              </Form.Label>
              <Form.Control
                type="datetime-local"
                id="wd-due-date"
                defaultValue={assignment?.dueDate || ""}
                className="mb-3"
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
                  />
                </Col>
              </Row>
            </div>
          </Col>
        </Form.Group>

        <hr />

        <div className="d-flex justify-content-end gap-2">
          <Button variant="secondary" type="button">
            Cancel
          </Button>
          <Button variant="danger" type="submit">
            Save
          </Button>
        </div>
      </Form>
    </div>
  );
}
