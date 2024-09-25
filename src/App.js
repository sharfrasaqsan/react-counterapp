import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);
  const [initialValue, setInitialValue] = useState(0);
  const [history, setHistory] = useState([]);

  const setInitial = () => {
    if (isNaN(+initialValue)) return;
    setCount(+initialValue);
    addToHistory(+initialValue);
  };

  const increment = () => {
    const newCount = count + 1;
    setCount(newCount);
    addToHistory(newCount);
  };

  const decrement = () => {
    const newCount = count - 1;
    setCount(newCount);
    addToHistory(newCount);
  };

  const reset = () => {
    const confirmReset = window.confirm(
      "Are you sure you want to reset the counter?"
    );
    if (confirmReset) {
      setCount(0);
      setHistory([]);
    }
  };

  const addToHistory = (newCount) => {
    const newHistory = [...history, newCount];
    setHistory(newHistory);
  };

  return (
    <div className="app-container">
      <div className="counter-card">
        <h1 className="counter-title">React Counter App</h1>

        <form
          className="initial-value-section"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="number"
            placeholder="Enter initial value"
            value={initialValue}
            onChange={(e) => setInitialValue(e.target.value)}
          />
          <button className="button set-initial" onClick={setInitial}>
            Set Initial Value
          </button>
        </form>

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

        <div className="history-section">
          <h2>History</h2>
          <ul className="history-list">
            {history.map((value, index) => (
              <span key={index}>{value}, </span>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
