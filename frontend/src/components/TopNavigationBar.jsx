// frontend/src/components/TopNavigationBar.jsx

// --- Imports -----------------------
import React from "react";
import "../styles/TopNavigationBar.scss";
import FavBadge from "./FavBadge";
import TopicList from "./TopicList";
import { useFav } from "./FavContext";

// --- TopNavigationBar Component ------------------------
const TopNavigationBar = () => {
  const { totalFavCount } = useFav(); // Assuming your context provides this

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <span className="mySignature">&#5792;&#5847;</span>
      <TopicList />
      <FavBadge isFavPhotoExist={totalFavCount > 0} favCount={totalFavCount} />
    </div>
  );
};

// --- Export -----------------------
export default TopNavigationBar;
