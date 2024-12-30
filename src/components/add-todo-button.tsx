"use client";

import { useRouter_UNSTABLE } from "waku";
import { createTodo } from "../actions";

export const AddTodoButton = () => {
  const router = useRouter_UNSTABLE();

  async function handleClick() {
    const description = prompt("Enter the todo description.");

    if (!description) {
      return;
    }

    await createTodo(description);
    router.reload();
  }

  return (
    <button
      type="button"
      className="bg-slate-800 text-white rounded-lg py-1 px-3 hover:bg-opacity-85"
      onClick={handleClick}
    >
      + add todo
    </button>
  );
};
