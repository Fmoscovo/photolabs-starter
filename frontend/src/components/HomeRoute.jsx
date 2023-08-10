// frontend/src/components/HomeRoute.jsx

// --- Imports -----------------------
import React from "react";
import TopNavigationBar from "./TopNavigationBar";
import TopicList from "./TopicList";
import PhotoList from "./PhotoList";
import photos from "../mocks/photos";
import topics from "../mocks/topics";
import "../styles/HomeRoute.scss";

// --- HomeRoute Component ------------------------
const HomeRoute = () => {
  return (
    <div className="home-route">
      <TopNavigationBar />
      <TopicList topics={topics} />
      <PhotoList photos={photos} />
    </div>
  );
};
// ------------------- Export ------------------------
export default HomeRoute;
