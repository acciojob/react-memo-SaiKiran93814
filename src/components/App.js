import React, { useState, useCallback } from "react";
import ReactMemo from "./ReactMemo";
import UseMemo from "./UseMemo";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [customTask, setCustomTask] = useState("");
  const [counter, setCounter] = useState(0);

  const addNewTodo = () => {
    setTodos((prev) => [...prev, "New todo"]);
  };

  const handleSubmit = () => {
    if (customTask.length > 5) {
      setTodos((prev) => [...prev, customTask]);
      setCustomTask("");
    }
  };

  const handleInputChange = (e) => {
    setCustomTask(e.target.value);
  };

  const incrementCounter = () => {
    setCounter((prev) => prev + 1);
  };

  const memoizedTodos = useCallback(() => todos, [todos]);

  return (
    <div>
      <h1>Task Manager</h1>

      <button onClick={addNewTodo}>Add Todo</button>

      <input
        type="text"
        placeholder="Custom task"
        value={customTask}
        onChange={handleInputChange}
      />
      <button onClick={handleSubmit}>Submit</button>

      <ReactMemo todos={todos} />

      <h2>Counter: {counter}</h2>
      <button onClick={incrementCounter}>Increment</button>

      <UseMemo todos={memoizedTodos()} />
    </div>
  );
};

export default App;
