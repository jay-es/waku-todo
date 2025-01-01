import { db } from "../db";
import { type Todo, todosTable } from "../db/schema";
import { DeleteTodoButton } from "./delete-todo-button";
import { TodoCheckbox } from "./todo-checkbox";

const TodoListItem = ({ todo }: { todo: Todo }) => (
  <div className="grid grid-cols-[auto_1fr_auto] gap-x-1.5 items-center">
    <TodoCheckbox todo={todo} />
    <span>{todo.description}</span>
    <DeleteTodoButton todo={todo} />
  </div>
);

export const TodoList = async () => {
  const todos = await db.select().from(todosTable);

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
