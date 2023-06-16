import React, { useState } from "react";

const App = () => {
  const [isSwapped, setIsSwapped] = useState(false);

  const swapColors = () => {
    setIsSwapped(!isSwapped);
  };

  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          width: "300px",
          height: "300px",
          backgroundColor: isSwapped ? "blue" : "red",
        }}
        onClick={swapColors}
      />
      <div
        style={{
          width: "300px",
          height: "300px",
          backgroundColor: isSwapped ? "red": "blue",
        }}
        onClick={swapColors}
      />
    </div>
  );
};

export default App;