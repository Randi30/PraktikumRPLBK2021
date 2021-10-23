import React from "react";
import TextField from "@mui/material/TextField";
import useInputState from "./useInputState";
import "./styles.css";

const TodoForm = ({ saveTodo }) => {
  const { value, reset, onChange } = useInputState();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        saveTodo(value);
        reset();
      }}
    >
      <TextField
        className="input"
        variant="outlined"
        placeholder="Add todo"
        margin="normal"
        onChange={onChange}
        value={value}
      />
    </form>
  );
};

export default TodoForm;
