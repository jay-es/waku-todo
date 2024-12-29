import { type Todo, getTodos } from "../todos";

const TodoListItem = ({ todo }: { todo: Todo }) => (
  <div className="grid grid-cols-[auto_1fr] gap-x-2 items-center">
    <input type="checkbox" checked={todo.completed} readOnly />
    <span>{todo.description}</span>
  </div>
);

export const TodoList = async () => {
  const todos = await getTodos();

  return (
    <ul className="my-4">
      {todos.map((todo) => (
        <li key={todo.id}>
          <TodoListItem todo={todo} />
        </li>
      ))}
    </ul>
  );
};
