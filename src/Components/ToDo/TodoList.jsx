import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const TodoList = ({ tasks, deleteTask, toggleTask }) => {
  return (
    <ul className="space-y-3">
      {tasks.length === 0 ? (
        <p className="text-gray-500 text-center">✨ No tasks found</p>
      ) : (
        tasks.map((task) => (
          <li
            key={task.id}
            className="flex justify-between items-center bg-gray-50 rounded-xl px-4 py-3 shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
                className="w-5 h-5 accent-purple-600 cursor-pointer"
              />
              <span
                className={`text-lg ${
                  task.completed
                    ? "line-through text-gray-400"
                    : "text-gray-800"
                }`}
              >
                {task.text}
              </span>
            </div>
            <AiOutlineClose
              onClick={() => deleteTask(task.id)}
              className="text-red-500 cursor-pointer hover:text-red-700 transition"
              size="20px"
            />
          </li>
        ))
      )}
    </ul>
  );
};

export default TodoList;
