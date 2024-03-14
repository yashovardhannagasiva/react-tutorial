import React, { useState } from "react";

const Hooks = () => {
  const [count, setCount] = useState(10);

  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        increment
      </button>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Decrement
      </button>
    </div>

  );
};

export default Hooks;
