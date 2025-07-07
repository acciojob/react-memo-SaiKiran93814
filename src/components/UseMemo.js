import React, { useMemo } from "react";

const UseMemo = ({ todos }) => {
  const longCalculation = (todos) => {
    console.log("Calculating heavy task count...");
    let total = 0;
    for (let i = 0; i < 100000000; i++) {
      total += 1;
    }
    return todos.length;
  };

  const count = useMemo(() => longCalculation(todos), [todos]);

  return (
    <div>
      <h3>Optimized Todo Count: {count}</h3>
    </div>
  );
};

export default UseMemo;
