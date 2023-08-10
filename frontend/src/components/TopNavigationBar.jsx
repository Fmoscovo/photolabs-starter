// frontend/src/components/TopNavigationBar.jsx
// ------------------- Imports -----------------------
import React from "react";
import "../styles/TopNavigationBar.scss";
import FavBadge from "./FavBadge"; // Import the FavBadge component.
import TopicList from "./TopicList"; // Import the TopicList component.

// ------------------- TopNavigationBar Component ------------------------
const TopNavigationBar = () => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <span className="mySignature">&#5792;&#5847;</span> {/* Your signature */}
      <TopicList /> {/* Include the TopicList component */}
      <FavBadge /> {/* Component to show total liked photos. */}
    </div>
  );
};

export default TopNavigationBar;
