import React from "react";

const TodoList = ({ todos }) => {
  console.log("Rendering TodoList...");
  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todos.map((todo, idx) => (
          <li key={idx}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(TodoList);
