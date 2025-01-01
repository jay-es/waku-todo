"use client";

import { useRouter_UNSTABLE } from "waku";
import type { Todo } from "../../../../db/schema";
import { deleteTodo } from "./actions";

export const DeleteTodoButton = ({ todo }: { todo: Todo }) => {
  const router = useRouter_UNSTABLE();

  async function handleClick() {
    const result = confirm("Delete this todo?");

    if (!result) {
      return;
    }

    await deleteTodo(todo.id);
    router.reload();
  }

  return (
    <button type="button" className="hover:opacity-50" onClick={handleClick}>
      🗑️
    </button>
  );
};
