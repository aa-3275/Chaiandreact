import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, dispatch }) => {
  if (tasks.length === 0) {
    return (
      <p className="empty-state">No tasks found. Start by adding one above!</p>
    );
  }

  return (
    <div className="task-list-grid">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} dispatch={dispatch} />
      ))}
    </div>
  );
};

export default TaskList;
