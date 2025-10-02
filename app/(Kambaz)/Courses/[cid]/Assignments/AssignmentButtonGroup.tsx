import { Button, Form, FormControl, InputGroup } from "react-bootstrap";
import InputGroupText from "react-bootstrap/esm/InputGroupText";
import { FaSearch } from "react-icons/fa";

export default function AssignmentButtonGroup() {
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
        >
          + Assignment
        </Button>
      </div>
    </div>
  );
}
