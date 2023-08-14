// frontend/src/components/TopNavigationBar.jsx

import React from "react";
import "../styles/TopNavigationBar.scss";
import FavBadge from "./FavBadge";
import TopicList from "./TopicList";
import { useFav } from "./FavContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb as regularLightbulb } from "@fortawesome/free-regular-svg-icons";
import { faImage as farImage } from "@fortawesome/free-regular-svg-icons"; // Add this line for the image icon
import { useDarkMode } from "../helperhooks/useDarkMode";
import { useChangingColor } from "../helperhooks/useChangingColor";
import { useChangingLightbulbColor } from "../helperhooks/useChangingLightbulbColor";

const TopNavigationBar = ({ topics, onSelectTopic }) => {
  const { totalFavCount } = useFav();
  const { isDarkMode, toggle } = useDarkMode();

  React.useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  const currentColor = useChangingColor();
  const currentLightbulbColor = useChangingLightbulbColor();

  return (
    <div className={`top-nav-bar ${isDarkMode ? "dark-theme" : ""}`}>
      <FontAwesomeIcon
        className="pulse-animation"
        icon={farImage}
        style={{ color: currentColor, marginRight: "8px" }}
      />
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <span className="mySignature">&#5792;&#5847;</span>
      <button className="icon-button" onClick={toggle}>
        <FontAwesomeIcon
          icon={regularLightbulb}
          style={{ color: currentLightbulbColor }}
          size="2x"
        />
      </button>
      <TopicList topics={topics} onSelectTopic={onSelectTopic} />

      <FavBadge isFavPhotoExist={totalFavCount > 0} favCount={totalFavCount} />
    </div>
  );
};

export default TopNavigationBar;
