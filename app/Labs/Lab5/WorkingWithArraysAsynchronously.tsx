import { useEffect, useState } from "react";
import { FormControl, ListGroup, ListGroupItem } from "react-bootstrap";
import { FaPlusCircle } from "react-icons/fa";
import { FaPencil, FaTrash } from "react-icons/fa6";
import { TiDelete } from "react-icons/ti";
import * as client from "./client";
export default function WorkingWithArraysAsynchronously() {
  const [todos, setTodos] = useState<
    { id: number; title: string; completed: boolean; editing?: boolean }[]
  >([]);
  const [errorMessage, setErrorMessage] = useState("");

  const editTodo = (todo: {
    id: number;
    title: string;
    completed: boolean;
  }) => {
    const updatedTodos = todos.map((t) =>
      t.id === todo.id ? { ...todo, editing: true } : t
    );
    setTodos(updatedTodos);
  };
  const updateTodo = async (todo: {
    id: number;
    title: string;
    completed: boolean;
    editing?: boolean;
  }) => {
    try {
      await client.updateTodo(todo);
      setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
    } catch (error: any) {
      setErrorMessage(error.message);
    }
  };

  const createNewTodo = async () => {
    const todos = await client.createNewTodo();
    setTodos(todos);
  };

  const fetchTodos = async () => {
    const todos = await client.fetchTodos();
    setTodos(todos);
  };
  const removeTodo = async (todo: {
    id: number;
    title: string;
    completed: boolean;
  }) => {
    const updatedTodos = await client.removeTodo(todo);
    setTodos(updatedTodos);
  };
  const postNewTodo = async () => {
    const newTodo = await client.postNewTodo({
      title: "New Posted Todo",
      completed: false,
    });
    setTodos([...todos, newTodo]);
  };
  const deleteTodo = async (todo: {
    id: number;
    title: string;
    completed: boolean;
  }) => {
    try {
      await client.deleteTodo(todo);
      const newTodos = todos.filter((t) => t.id !== todo.id);
      setTodos(newTodos);
    } catch (error: any) {
      setErrorMessage(error.message);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);
  return (
    <div id="wd-asynchronous-arrays">
      <h3>Working with Arrays Asynchronously</h3>{" "}
      {errorMessage && (
        <div
          id="wd-todo-error-message"
          className="alert alert-danger mb-2 mt-2"
        >
          {errorMessage}
        </div>
      )}
      <h4>
        Todos{" "}
        <FaPlusCircle
          onClick={createNewTodo}
          className="text-success float-end fs-3"
        />
        <FaPlusCircle
          onClick={postNewTodo}
          className="text-primary float-end fs-3 me-3"
          id="wd-post-todo"
        />
      </h4>
      <ListGroup>
        {todos.map((todo) => (
          <ListGroupItem key={todo.id}>
            <FaPencil
              onClick={() => editTodo(todo)}
              className="text-primary float-end me-2 mt-1"
            />

            <FaTrash
              onClick={() => removeTodo(todo)}
              className="text-danger float-end mt-1"
              id="wd-remove-todo"
            />
            <TiDelete
              onClick={() => deleteTodo(todo)}
              className="text-danger float-end me-2 fs-3"
              id="wd-delete-todo"
            />
            <input
              title="f"
              id={`wd-todo-${todo.id}`}
              type="checkbox"
              className="form-check-input me-2"
              defaultChecked={todo.completed}
              onChange={(e) =>
                updateTodo({ ...todo, completed: e.target.checked })
              }
            />
            {!todo.editing ? (
              todo.title
            ) : (
              <FormControl
                className="w-50 float-start"
                defaultValue={todo.title}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    updateTodo({ ...todo, editing: false });
                  }
                }}
                onChange={(e) => updateTodo({ ...todo, title: e.target.value })}
              />
            )}
          </ListGroupItem>
        ))}
      </ListGroup>{" "}
      <hr />
    </div>
  );
}
