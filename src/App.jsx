import { useEffect, useState } from "react";
import "./App.css";
import Input from "./Components/Input/Input";
import TodoList from "./Components/ToDo/TodoList";

function App() {
  
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (taskText) => {
    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const filteredTask = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex items-center justify-center p-6">
      <div className="w-full max-w-lg bg-white shadow-2xl rounded-2xl p-6">
        <h1 className="text-3xl font-extrabold text-center mb-6 text-purple-600">
          📝 To-Do App
        </h1>

        <Input addTask={addTask} />

        <div className="flex justify-center gap-3 my-6">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-xl font-medium transition ${
              filter === "all"
                ? "bg-purple-600 text-white shadow-md"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            All
          </button>

          <button
            onClick={() => setFilter("completed")}
            className={`px-4 py-2 rounded-xl font-medium transition ${
              filter === "completed"
                ? "bg-green-500 text-white shadow-md"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            Completed
          </button>

          <button
            onClick={() => setFilter("pending")}
            className={`px-4 py-2 rounded-xl font-medium transition ${
              filter === "pending"
                ? "bg-red-500 text-white shadow-md"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            Pending
          </button>
        </div>

        <TodoList
          tasks={filteredTask}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
        />

        <p className="text-center text-gray-500 mt-4 text-sm">
          {tasks.length} task{tasks.length !== 1 ? "s" : ""} total
        </p>
      </div>
    </div>
  );
}

export default App;
