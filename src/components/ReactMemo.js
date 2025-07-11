import React from "react";

const TodoList = ({ todos }) => {
  return (
    <ul data-testid="todo-list">
      {todos.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </ul>
  );
};

export default React.memo(TodoList);
