// frontend/src/App.jsx

// ------------------- Imports -----------------------
import React from "react";
import PhotoList from "./components/PhotoList"; // Main component to display list of photos.
import TopNavigationBar from "./components/TopNavigationBar"; // Top navigation bar.
import "./App.scss"; // Styles for the App component.

// ------------------- App Component ------------------------
const App = () => {
  return (
    <div className="App">
      <TopNavigationBar />
      <PhotoList />
    </div>
  );
};

export default App;
