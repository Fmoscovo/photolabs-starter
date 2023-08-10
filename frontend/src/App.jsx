// App.jsx

// ------------------- Imports -----------------------
import React from "react";
import PhotoList from "./components/PhotoList"; // Main component to display list of photos
import TopicList from "./components/TopicList"; // Main component to display list of topics
import "./App.scss"; // Styles for the App component

// ------------------- App Component ------------------------
const App = () => {
  return (
    <div className="App">
      <TopicList />
      <PhotoList />
    </div>
  );
};

export default App;
