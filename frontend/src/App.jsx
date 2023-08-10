// frontend/src/App.jsx

// ------------------- Imports -----------------------
import React from "react";
import HomeRoute from "./components/HomeRoute";
import { FavProvider } from "./components/FavContext";
import "./App.scss"; // Styles for the App component.

// ------------------- App Component ------------------------
const App = () => {
  return (
    <FavProvider>
      <div className="App">
        <HomeRoute />
      </div>
    </FavProvider>
  );
};
// ------------------- Export--------------------------------
export default App;
