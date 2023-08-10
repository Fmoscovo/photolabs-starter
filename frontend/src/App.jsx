// frontend/src/App.jsx

// ------------------- Imports -----------------------
import React from "react";
import HomeRoute from "./components/HomeRoute";
import "./App.scss"; // Styles for the App component.

// ------------------- App Component ------------------------
const App = () => {
  return (
    <div className="App">
      <HomeRoute />
    </div>
  );
};
// ------------------- Export--------------------------------
export default App;
