// frontend/src/App.jsx

// ------------------- Imports -----------------------
import React, { useState } from "react";
import HomeRoute from "./components/HomeRoute";
import { FavProvider } from "./components/FavContext";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";
import "./App.scss"; // Styles for the App component.

// ------------------- App Component ------------------------
const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <FavProvider>
      <div className="App">
        <HomeRoute setIsModalOpen={setIsModalOpen} />
        {isModalOpen && (
          <PhotoDetailsModal closeModal={() => setIsModalOpen(false)} />
        )}
      </div>
    </FavProvider>
  );
};
// ------------------- Export--------------------------------
export default App;
