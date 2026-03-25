import React, { useRef } from "react";

const TaskInput = ({ onAdd }) => {
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputRef.current.value.trim()) {
      onAdd(inputRef.current.value);
      inputRef.current.value = "";
      inputRef.current.focus();
    }
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Add a new project milestone..."
        className="main-input"
      />
      <button type="submit" className="add-btn">
        Add Task
      </button>
    </form>
  );
};

export default TaskInput;
