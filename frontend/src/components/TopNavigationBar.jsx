// frontend/src/components/TopNavigationBar.jsx

// --- Imports -----------------------
import React from "react";
import "../styles/TopNavigationBar.scss";
import FavBadge from "./FavBadge";
import TopicList from "./TopicList";
import { useFav } from "./FavContext";
import topics from "mocks/topics";

// --- TopNavigationBar Component ------------------------
const TopNavigationBar = () => {
  const { totalFavCount } = useFav();

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <span className="mySignature">&#5792;&#5847;</span>
      <TopicList topics={topics} />
      <FavBadge isFavPhotoExist={totalFavCount > 0} favCount={totalFavCount} />
    </div>
  );
};

// --- Export -----------------------
export default TopNavigationBar;
