// frontend/src/components/PhotoFavButton.jsx

// --- Imports -----------------------
import React, { useState } from "react";
import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";
import { useFav } from "./FavContext";

// --- PhotoFavButton Component ------------------------
const PhotoFavButton = ({ photoId }) => {
  const { isFavorited, toggleFavorite } = useFav();
  const [displayAlert, setDisplayAlert] = useState(false);

  const handleFavoriteClick = (event) => {
    event.stopPropagation(); // Prevent event from bubbling up

    if (!isFavorited(photoId)) {
      setDisplayAlert(true);
      setTimeout(() => setDisplayAlert(false), 2000); // Remove alert after 2 seconds
    }

    toggleFavorite(photoId);
    // log the action
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
        <FavIcon selected={isFavorited(photoId)} displayAlert={displayAlert} />
      </div>
    </div>
  );
};

export default PhotoFavButton;
