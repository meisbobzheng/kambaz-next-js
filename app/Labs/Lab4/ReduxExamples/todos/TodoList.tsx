import { ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { Todo } from "./todosReducer";

export default function TodoList() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { todos } = useSelector((state: any) => state.todosReducer);
  return (
    <div id="wd-todo-list-redux">
      <h2>Todo List</h2>
      <ListGroup>
        <TodoForm />
        {todos.map((todo: Todo, index: number) => (
          <TodoItem key={index} todo={todo} />
        ))}
      </ListGroup>
      <hr />
    </div>
  );
}
