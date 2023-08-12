// frontend/src/components/PhotoFavButton.jsx

import React, { useState } from "react";
import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";
import { useFav } from "./FavContext";

/**
 * PhotoFavButton Component
 * Allows users to toggle a photo as a favorite.
 * @param {string} photoId - The ID of the photo.
 */
const PhotoFavButton = ({ photoId }) => {
  const { isFavorited, toggleFavorite } = useFav();
  const [displayAlert, setDisplayAlert] = useState(false);
  const isPhotoFavorited = isFavorited(photoId);

  const handleFavoriteClick = (event) => {
    event.stopPropagation();

    if (!isPhotoFavorited) {
      setDisplayAlert(true);
      setTimeout(() => setDisplayAlert(false), 2000);
    }

    toggleFavorite(photoId);
  };

  return (
    <div className="photo-list__fav-icon">
      <button
        className="photo-list__fav-icon-svg"
        onClick={handleFavoriteClick}
        aria-label={`Toggle favorite for photo ${photoId}`}
        title={`Toggle favorite for photo ${photoId}`}
      >
        <FavIcon selected={isPhotoFavorited} displayAlert={displayAlert} />
      </button>
    </div>
  );
};

export default PhotoFavButton;
