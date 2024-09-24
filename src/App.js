import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);
  const [initialValue, setInitialValue] = useState(0);

  const setInitial = () => {
    const initialValueInt = parseInt(initialValue);
    if (initialValueInt === "") return;
    setCount(initialValueInt);
  };

  const increment = () => {
    setCount((count) => count + 1);
  };

  const decrement = () => {
    setCount((count) => count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="app-container">
      <div className="counter-card">
        <h1 className="counter-title"> React Counter App</h1>

        <div className="initial-value-section">
          <input
            type="number"
            placeholder="Enter initial value"
            value={initialValue}
            onChange={(e) => setInitialValue(e.target.value)}
          />
          <button className="button set-initial" onClick={setInitial}>
            Set Initial Value
          </button>
        </div>

        <div className="count-display">{count}</div>
        <div className="button-group">
          <button className="button increment" onClick={increment}>
            Increment
          </button>
          <button className="button decrement" onClick={decrement}>
            Decrement
          </button>
          <button className="button reset" onClick={reset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
