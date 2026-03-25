import React, {
  useReducer,
  useEffect,
  useMemo,
  useState,
  useCallback,
} from "react";
import { taskReducer, initialState } from "./hooks/taskReducer";
import { useTheme } from "./context/ThemeContext";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import "./App.css";

function App() {
  // 1. Theme Context se values nikalna
  const { isDarkMode, toggleTheme } = useTheme();

  // 2. Search state for filtering logic
  const [search, setSearch] = useState("");

  // 3. useReducer with Lazy Initialization (Local Storage se data uthana)
  const [tasks, dispatch] = useReducer(taskReducer, initialState, (initial) => {
    const saved = localStorage.getItem("project_tasks");
    return saved ? JSON.parse(saved) : initial;
  });

  // 4. Persistence Effect: Jab bhi tasks badle, save karo
  useEffect(() => {
    localStorage.setItem("project_tasks", JSON.stringify(tasks));
    document.title = `Tasks: ${tasks.length}`;
  }, [tasks]);

  // 5. useMemo Optimization: Search filter calculation
  const filteredTasks = useMemo(() => {
    return tasks.filter((t) =>
      t.text.toLowerCase().includes(search.toLowerCase()),
    );
  }, [tasks, search]);

  // 6. useCallback: Child components ko stable functions dena
  const handleAddTask = useCallback((text) => {
    dispatch({ type: "ADD_TASK", payload: text });
  }, []);

  return (
    /* isDarkMode class yaha apply ho rahi hai jo CSS variables ko control karegi */
    <div className={`app-wrapper ${isDarkMode ? "dark" : "light"}`}>
      <div className="app-container">
        <header className="glass-header">
          <h1>
            TaskMaster <span className="pro-badge">PRO</span>
          </h1>
          <button className="theme-toggle" onClick={toggleTheme}>
            {isDarkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </header>

        <section className="controls">
          <div className="stats">
            Total Tasks: <strong>{tasks.length}</strong>
          </div>
          <input
            type="text"
            placeholder="Search your tasks..."
            className="search-input"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </section>

        {/* Modular Component for adding tasks */}
        <TaskInput onAdd={handleAddTask} />

        {/* Modular Component for displaying the list */}
        <div className="task-section">
          <TaskList tasks={filteredTasks} dispatch={dispatch} />
        </div>
      </div>
    </div>
  );
}

export default App;
