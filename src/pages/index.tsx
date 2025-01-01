import { Link } from "waku";

import { AddTodoButton } from "../features/todo/components/AddTodoButton/AddTodoButton";
import { TodoList } from "../features/todo/components/TodoList/TodoList";

export default async function HomePage() {
  const data = await getData();

  return (
    <div>
      <title>{data.title}</title>
      <h1 className="text-4xl font-bold tracking-tight">{data.headline}</h1>
      <p>{data.body}</p>

      <section className="my-4 space-y-4">
        <TodoList />
        <AddTodoButton />
      </section>

      <Link to="/about" className="mt-4 inline-block underline">
        About page
      </Link>
    </div>
  );
}

const getData = async () => {
  const data = {
    title: "Waku Todo",
    headline: "Waku",
    body: "Hello world!",
  };

  return data;
};

export const getConfig = async () => {
  return {
    render: "dynamic",
  } as const;
};
