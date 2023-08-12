// frontend/src/App.jsx

// React imports
import React, { useState } from "react";

// Component imports
import HomeRoute from "./components/HomeRoute";
import { FavProvider } from "./components/FavContext";

// Styles imports
import "./App.scss";

// Main App component
const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <FavProvider>
      <div className="App">
        <HomeRoute setIsModalOpen={setIsModalOpen} />
      </div>
    </FavProvider>
  );
};

export default App;
