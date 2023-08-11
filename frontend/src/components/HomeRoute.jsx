// frontend/src/components/HomeRoute.jsx

// --- Imports -----------------------
import React, { useState } from "react";
import TopNavigationBar from "./TopNavigationBar";
import TopicList from "./TopicList";
import PhotoList from "./PhotoList";
import PhotoDetailsModal from "../routes/PhotoDetailsModal";
import photos from "../mocks/photos";
import topics from "../mocks/topics";
import "../styles/HomeRoute.scss";

// --- HomeRoute Component ------------------------
const HomeRoute = ({ setIsModalOpen }) => {
  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} />
      <PhotoList photos={photos} setIsModalOpen={setIsModalOpen} />
    </div>
  );
};

// ------------------- Export ------------------------
export default HomeRoute;
