import React from "react";
import { useState } from "react";
const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h2>Contatore somma e sottrazione</h2>
        </div>
        <div className="col-12">
          <p>{count}</p>
          <div className="buttons">
            <button className="btn btn-primary me-2" onClick={handleIncrement}>
              +
            </button>
            <button
              className="btn btn-primary"
              onClick={() => {
                setCount(count - 1);
              }}
            >
              -
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
