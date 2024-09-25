import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);
  const [initialValue, setInitialValue] = useState(0);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const initialValue = localStorage.getItem("initialValue");
    if (initialValue) {
      setCount(+initialValue);
      setInitialValue(+initialValue);
    }
  }, []);

  // Keyboard shortcuts effect
  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
        case "+":
        case "ArrowUp":
          increment();
          break;
        case "-":
        case "ArrowDown":
          decrement();
          break;
        case "r":
        case "R":
          reset();
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [count, history]);

  const setInitial = () => {
    if (isNaN(+initialValue)) return;
    setCount(+initialValue);
    addToHistory(+initialValue);
    localStorage.setItem("initialValue", initialValue);
  };

  const increment = () => {
    const newCount = count + 1;
    setCount(newCount);
    addToHistory(newCount);
    localStorage.setItem("initialValue", newCount);
  };

  const decrement = () => {
    const newCount = count - 1;
    setCount(newCount);
    addToHistory(newCount);
    localStorage.setItem("initialValue", newCount);
  };

  const reset = () => {
    const confirmReset = window.confirm(
      "Are you sure you want to reset the counter?"
    );
    if (confirmReset) {
      setCount(0);
      setHistory([]);
    }
    localStorage.setItem("initialValue", 0);
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
