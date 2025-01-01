import type { Todo } from "../../../../db/schema";
import { DeleteTodoButton } from "./DeleteTodoButton";
import { TodoCheckbox } from "./TodoCheckbox";
import { getTodos } from "./getTodos";

const TodoListItem = ({ todo }: { todo: Todo }) => (
  <div className="grid grid-cols-[auto_1fr_auto] gap-x-1.5 items-center">
    <TodoCheckbox todo={todo} />
    <span>{todo.description}</span>
    <DeleteTodoButton todo={todo} />
  </div>
);

export const TodoList = async () => {
  const todos = await getTodos();

  return (
    <ul className="space-y-1">
      {todos.map((todo) => (
        <li key={todo.id}>
          <TodoListItem todo={todo} />
        </li>
      ))}
    </ul>
  );
};
