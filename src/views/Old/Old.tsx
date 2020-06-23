import React from "react";
import logo from "../../assets/logo.svg";
import "./App.css";

function App() {
  return (
    <div className="Old">
      <header className="Old-header">
        <img src={logo} className="Old-logo" alt="logo" />
        <p>
          Edit <code>src/Old.tsx</code> and save to reload.
        </p>
        <a
          className="Old-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
