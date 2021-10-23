import React from "react";
import Typography from "@mui/material/Typography";
import ToDoing from "./TodoForm";
import TodoList from "./TodoList";
import useTodoState from "./useTodoState";
import "./styles.css";

export default function Todo() {
  const { todos, addTodo, deleteTodo } = useTodoState([]);

  return (
    <div className="ToDo">
      <Typography component="h1" variant="h2">
        Todos
      </Typography>

      <ToDoing
        saveTodo={(todoText) => {
          const trimmedText = todoText.trim();

          if (trimmedText.length > 0) {
            addTodo(trimmedText);
          }
        }}
      />

      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}
