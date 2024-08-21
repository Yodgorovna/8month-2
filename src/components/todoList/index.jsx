import React from "react";
import { useTodoStore } from "../../store/todoStore";
import { ToDoItem } from "../todoItem";
import { AnimatePresence, animate } from "framer-motion";

export const TodoList = () => {
  const todos = useTodoStore((state) => state.todos);
  return (
    <AnimatePresence>
      <ul>
        {todos.map((todo) => (
          <ToDoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </AnimatePresence>
  );
};
