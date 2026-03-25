import React from "react";

const TaskItem = ({ task, dispatch }) => {
  return (
    <div className={`task-card ${task.completed ? "completed" : ""}`}>
      <div
        className="task-content"
        onClick={() => dispatch({ type: "TOGGLE_TASK", payload: task.id })}
      >
        <div className="checkbox">{task.completed ? "✓" : ""}</div>
        <span className="task-text">{task.text}</span>
      </div>
      <button
        className="delete-btn"
        onClick={() => dispatch({ type: "DELETE_TASK", payload: task.id })}
      >
        ✕
      </button>
    </div>
  );
};

export default TaskItem;
