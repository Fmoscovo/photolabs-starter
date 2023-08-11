// frontend/src/components/PhotoFavButton.jsx

// --- Imports -----------------------
import React from "react";
import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";
import { useFav } from "./FavContext";

// --- PhotoFavButton Component ------------------------
const PhotoFavButton = ({ photoId }) => {
  const { isFavorited, toggleFavorite } = useFav();

  const handleFavoriteClick = (event) => {
    event.stopPropagation(); // Prevent event from bubbling up
    toggleFavorite(photoId);
    //log the action
    console.log(`Toggled favorite status for photo with ID: ${photoId}`);
  };

  return (
    <div className="photo-list__fav-icon">
      <div
        className="photo-list__fav-icon-svg"
        onClick={handleFavoriteClick}
        aria-label={`Toggle favorite for photo ${photoId}`}
        title={`Toggle favorite for photo ${photoId}`}
      >
        <FavIcon selected={isFavorited(photoId)} />
      </div>
    </div>
  );
};

// -------Exports ------------------------
export default PhotoFavButton;
