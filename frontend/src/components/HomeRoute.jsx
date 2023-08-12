// frontend/src/components/HomeRoute.jsx

import React from "react";
import TopNavigationBar from "./TopNavigationBar";
import PhotoList from "./PhotoList";
import photos from "../mocks/photos";
import topics from "../mocks/topics";
import "../styles/HomeRoute.scss";

/**
 * HomeRoute Component
 * Displays the top navigation bar and a list of photos.
 */
const HomeRoute = () => (
  <div className="home-route">
    <TopNavigationBar topics={topics} />
    <PhotoList photos={photos} />
  </div>
);

export default HomeRoute;
