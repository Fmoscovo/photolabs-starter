// frontend/src/components/PhotoFavButton.jsx

// ------------------- Imports -----------------------
import React, { useState } from "react";
import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

// ------------------- PhotoFavButton Component ------------------------
// This component renders a button for favoriting a photo.
// Clicking the button toggles its favorited state and provides visual feedback for the first-time favorite.
const PhotoFavButton = () => {
  // State for tracking whether the photo is favorited or not.
  const [isFavorited, setIsFavorited] = useState(false);

  // State for tracking first-time favorite.
  const [isFirstTimeFavorite, setIsFirstTimeFavorite] = useState(true);

  // Handler to toggle favorite status and prevent the event from propagating to other elements.
  const toggleFavorite = (event) => {
    event.stopPropagation();
    event.preventDefault();

    // If the photo is favorited for the first time, update the state.
    if (!isFavorited && isFirstTimeFavorite) {
      setIsFirstTimeFavorite(false);
    }

    // Toggle the favorited state.
    setIsFavorited((prevState) => !prevState);
    console.log("Icon clicked!"); // Debugging log.
  };

  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <FavIcon
          selected={isFavorited}
          displayAlert={!isFirstTimeFavorite && isFavorited}
          onClick={toggleFavorite}
        />
      </div>
    </div>
  );
};

export default PhotoFavButton;
