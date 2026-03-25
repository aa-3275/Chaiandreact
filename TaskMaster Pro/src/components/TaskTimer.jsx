import React, { useEffect } from "react";

function TaskTimer({ taskId, dispatch, isRunning }) {
  useEffect(() => {
    let interval = null;

    if (isRunning) {
      // Start the side effect
      interval = setInterval(() => {
        dispatch({ type: "UPDATE_TIME", payload: taskId });
      }, 1000);
    }

    // THE CLEANUP FUNCTION
    // React calls this when the component unmounts or before the effect runs again.
    return () => {
      console.log("Cleaning up timer for task:", taskId);
      clearInterval(interval);
    };
  }, [isRunning, taskId, dispatch]); // Only restart if these change

  return <span className="timer-badge">Live Tracking...</span>;
}
