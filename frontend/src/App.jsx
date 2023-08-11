// frontend/src/App.jsx

// ------------------- Imports -----------------------
import React, { useState } from "react";
import HomeRoute from "./components/HomeRoute";
import { FavProvider } from "./components/FavContext";
import "./App.scss"; // Styles for the App component.

// ------------------- App Component ------------------------
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
// ------------------- Export--------------------------------
export default App;
