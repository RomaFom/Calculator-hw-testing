import React from "react";
import "./App.css";
import { Reformat } from "./utils/calc";
import Calculator from "./components/Calculator";
// Reformat("5+5+ln(2)");
function App() {
  return (
    <div className="App">
      <Calculator />
    </div>
  );
}

export default App;
