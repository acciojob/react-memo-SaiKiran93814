import React, { useState, useCallback } from "react";
import UseMemo from "./UseMemo";
import ReactMemo from "./ReactMemo";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [counter, setCounter] = useState(0);
  const [customTask, setCustomTask] = useState("");

  const addNewTodo = () => {
    setTodos([...todos, "New todo"]);
  };

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const handleSubmit = () => {
    if (customTask.length > 5) {
      setTodos([...todos, customTask]);
      setCustomTask("");
    } else {
      alert("Task must be more than 5 characters");
    }
  };

  const handleInputChange = (e) => {
    setCustomTask(e.target.value);
  };

  const memoizedTodos = useCallback(() => todos, [todos]);

  return (
    <div style={{ padding: 20 }}>
      <h1>React.UseMemo</h1>

      <button onClick={addNewTodo}>My Todos</button>

      <input
        type="text"
        value={customTask}
        onChange={handleInputChange}
        placeholder="Enter a todo task"
      />
      <button onClick={handleSubmit}>Submit</button>

      <ReactMemo todos={todos} />

      <hr />

      <h2>Counter: {counter}</h2>
      <button onClick={incrementCounter}>Increment</button>

      <UseMemo todos={memoizedTodos()} />
    </div>
  );
};

export default App;


