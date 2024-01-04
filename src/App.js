import React from "react";
import "./index.css";

const App = () => {
  return (
    <div className="container">
      <h1>Increment/Decrement counter</h1>
      <h4>using React and Redux</h4>

      <div class="quantity">
        <a class="quantity_plus" title="Increment">
          <button>+</button>
        </a>
        <a class="quantity_minus" title="Decrement">
          <button>-</button>
        </a>
      </div>
    </div>
  );
};

export default App;
