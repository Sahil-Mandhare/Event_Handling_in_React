import React, { useState } from "react";

function App() {
  const [mouseHover, setMouseHover] = useState(false);
  function handleMouseHover() {
    setMouseHover(true);
  }
  function handleMouseOut() {
    setMouseHover(false);
  }
  return (
    <div className="container">
      <h1>Hello</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: mouseHover ? "black" : "white" }}
        onMouseOver={handleMouseHover}
        onMouseOut={handleMouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
