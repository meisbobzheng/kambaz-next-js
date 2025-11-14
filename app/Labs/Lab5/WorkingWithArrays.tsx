import { useState } from "react";
import { Col, FormCheck, FormControl, Row } from "react-bootstrap";

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
export default function WorkingWithArrays() {
  const [todo, setTodo] = useState({
    id: "1",
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-09-09",
    completed: false,
  });

  const API = `${HTTP_SERVER}/lab5/todos`;
  return (
    <div id="wd-working-with-arrays">
      <h3>Working with Arrays</h3>
      <h4>Retrieving Arrays</h4>
      <a id="wd-retrieve-todos" className="btn btn-primary" href={API}>
        Get Todos{" "}
      </a>
      <hr />
      <h4>Retrieving an Item from an Array by ID</h4>
      <a
        id="wd-retrieve-todo-by-id"
        className="btn btn-primary float-end"
        href={`${API}/${todo.id}`}
      >
        Get Todo by ID
      </a>
      <FormControl
        id="wd-todo-id"
        defaultValue={todo.id}
        className="w-50"
        onChange={(e) => setTodo({ ...todo, id: e.target.value })}
      />
      <hr />
      <h3>Filtering Array Items</h3>
      <a
        id="wd-retrieve-completed-todos"
        className="btn btn-primary"
        href={`${API}?completed=true`}
      >
        Get Completed Todos
      </a>
      <hr />
      <h3>Creating new Items in an Array</h3>
      <a
        id="wd-retrieve-completed-todos"
        className="btn btn-primary"
        href={`${API}/create`}
      >
        Create Todo
      </a>
      <hr />
      <h3>Removing from an Array</h3>
      <a
        id="wd-remove-todo"
        className="btn btn-primary float-end"
        href={`${API}/${todo.id}/delete`}
      >
        Remove Todo with ID = {todo.id}{" "}
      </a>
      <FormControl
        defaultValue={todo.id}
        className="w-50"
        onChange={(e) => setTodo({ ...todo, id: e.target.value })}
      />
      <hr />
      <h3>Updating an Item in an Array</h3>

      {/* ID + Update button */}
      <Row className="align-items-center mb-3">
        <Col xs={8} md={6}>
          <FormControl
            defaultValue={todo.id}
            onChange={(e) => setTodo({ ...todo, id: e.target.value })}
          />
        </Col>
      </Row>

      {/* Title + Update button */}
      <Row className="align-items-center mb-3">
        <Col xs={8} md={6}>
          <FormControl
            defaultValue={todo.title}
            onChange={(e) => setTodo({ ...todo, title: e.target.value })}
          />
        </Col>
        <Col xs="auto">
          <a
            href={`${API}/${todo.id}/title/${todo.title}`}
            className="btn btn-primary"
          >
            Update Title
          </a>
        </Col>
      </Row>

      {/* Completed Checkbox + Button */}
      <Row className="align-items-center mb-3">
        <Col xs={8} md={6}>
          <FormCheck
            type="checkbox"
            defaultChecked={todo.completed}
            label="Completed"
            onChange={(e) => setTodo({ ...todo, completed: e.target.checked })}
          />
        </Col>
        <Col xs="auto">
          <a
            href={`${API}/${todo.id}/description/${todo.description}`}
            className="btn btn-primary"
          >
            Update Description
          </a>
        </Col>
      </Row>

      {/* Description + Update button */}
      <Row className="align-items-center mb-3">
        <Col xs={8} md={6}>
          <FormControl
            defaultValue={todo.description}
            onChange={(e) => setTodo({ ...todo, description: e.target.value })}
          />
        </Col>
        <Col xs="auto">
          <a
            href={`${API}/${todo.id}/description/${todo.description}`}
            className="btn btn-primary"
          >
            Update Description
          </a>
        </Col>
      </Row>
    </div>
  );
}
