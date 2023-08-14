import React, { useState, useEffect } from "react";
import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";
import { useFav } from "./FavContext";

/**
 * PhotoFavButton Component
 * Renders a button that toggles a photo's favorite status.
 *
 * @param {string} photoId - The ID of the photo.
 */
const PhotoFavButton = ({ photoId }) => {
  const { isFavorited, toggleFavorite } = useFav();
  const [displayAlert, setDisplayAlert] = useState(false);

  // Check if the photo was favorited on initialization
  const likedPhotosOnInit =
    JSON.parse(localStorage.getItem("likedPhotos")) || [];
  const isPhotoFavorited = likedPhotosOnInit.includes(photoId);

  useEffect(() => {
    // Check for display alert based on initial liked photos
    setDisplayAlert(isPhotoFavorited);
  }, [photoId]);

  const handleFavoriteClick = (event) => {
    event.stopPropagation();

    setDisplayAlert(!isPhotoFavorited);
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
