import { type Todo, getTodos } from "../mock-todos";
import { TodoCheckbox } from "./todo-checkbox";

const TodoListItem = ({ todo }: { todo: Todo }) => (
  <div className="grid grid-cols-[auto_1fr] gap-x-1.5 items-center">
    <TodoCheckbox todo={todo} />
    <span>{todo.description}</span>
  </div>
);

export const TodoList = async () => {
  const todos = await getTodos();

  return (
    <ul className="my-4 space-y-1">
      {todos.map((todo) => (
        <li key={todo.id}>
          <TodoListItem todo={todo} />
        </li>
      ))}
    </ul>
  );
};
