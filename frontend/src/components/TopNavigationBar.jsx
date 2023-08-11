// frontend/src/components/TopNavigationBar.jsx

// --- Imports -----------------------
import React from "react";
import "../styles/TopNavigationBar.scss";
import FavBadge from "./FavBadge";
import TopicList from "./TopicList";
import { useFav } from "./FavContext";
import topics from "mocks/topics";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb as regularLightbulb } from "@fortawesome/free-regular-svg-icons";
import { useDarkMode } from "../helperhooks/useDarkMode"; // <-- Import the custom hook

const TopNavigationBar = () => {
  const { totalFavCount } = useFav();
  const { isDarkMode, toggle } = useDarkMode(); // <-- Use the custom hook

  React.useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  return (
    <div className={`top-nav-bar ${isDarkMode ? "dark-theme" : ""}`}>
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <span className="mySignature">&#5792;&#5847;</span>
      <button className="icon-button" onClick={toggle}>
        <FontAwesomeIcon
          icon={regularLightbulb}
          style={{ color: "#005eff" }}
          size="2x"
        />
      </button>{" "}
      {/* Moved the Toggle button here */}
      <TopicList topics={topics} />
      <FavBadge isFavPhotoExist={totalFavCount > 0} favCount={totalFavCount} />
    </div>
  );
};

export default TopNavigationBar;
