// frontend/src/App.jsx

// React imports
import React, { useState } from "react";
import HomeRoute from "./components/HomeRoute";
import { FavProvider } from "./components/FavContext";
import "./App.scss";

/**
 * Main App Component
 *
 * This is the root component of the application. It sets up the overall structure
 * and renders the HomeRoute component.
 *
 * @returns {JSX.Element} Rendered component
 */
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
