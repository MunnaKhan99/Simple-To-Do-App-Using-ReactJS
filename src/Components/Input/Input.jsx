import React, { useState } from 'react';

const Input = ({ addTask }) => {
  const [task, setTask] = useState("");

  const handleAdd = () => {
    if (task.trim() === '') return;
    addTask(task);
    setTask("");
  };

  return (
    <div className="bg-white p-4 rounded-2xl shadow-md mt-4">
      <div className="flex gap-3">
        <input
          type="text"
          placeholder="✍️ Write your task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="flex-1 border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
        />
        <button
          onClick={handleAdd}
          className="px-5 py-2 rounded-xl bg-blue-500 text-white font-medium hover:bg-blue-600 transition duration-300 ease-in-out"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default Input;
