"use client";

import { startTransition, useActionState, useOptimistic } from "react";
import type { Todo } from "../../../../db/schema";
import { toggleTodo } from "./actions";

export const TodoCheckbox = ({ todo }: { todo: Todo }) => {
  const [checked, toggleChecked] = useActionState(async (state) => {
    toggleOptimisticChecked(null);
    await toggleTodo(todo.id);
    return !state;
  }, !!todo.completedAt);

  const [optimisticChecked, toggleOptimisticChecked] = useOptimistic(
    checked,
    (state) => !state
  );

  function handleChange() {
    startTransition(() => {
      toggleChecked();
    });
  }

  return (
    <input
      type="checkbox"
      checked={optimisticChecked}
      onChange={handleChange}
    />
  );
};
