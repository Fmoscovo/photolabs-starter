// frontend/src/components/PhotoFavButton.jsx

import React, { useState, useEffect } from "react";
import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";
import { useFav } from "./FavContext";

const PhotoFavButton = ({ photoId }) => {
  const { isFavorited, toggleFavorite } = useFav();
  const [displayAlert, setDisplayAlert] = useState(false);
  const isPhotoFavorited = isFavorited(photoId);

  useEffect(() => {
    // Retrieve liked photo IDs from Local Storage on component mount
    const likedPhotos = JSON.parse(localStorage.getItem("likedPhotos")) || [];

    // Set displayAlert based on whether the photo is already favorited
    setDisplayAlert(likedPhotos.includes(photoId));
  }, [photoId]);

  const handleFavoriteClick = (event) => {
    event.stopPropagation();

    if (!isPhotoFavorited) {
      setDisplayAlert(true);
      toggleFavorite(photoId);

      // Update Local Storage with the new liked photo ID
      const likedPhotos = JSON.parse(localStorage.getItem("likedPhotos")) || [];
      localStorage.setItem(
        "likedPhotos",
        JSON.stringify([...likedPhotos, photoId])
      );
    } else {
      // Remove the photo ID from Local Storage if unliked
      const likedPhotos = JSON.parse(localStorage.getItem("likedPhotos")) || [];
      const updatedLikedPhotos = likedPhotos.filter((id) => id !== photoId);
      localStorage.setItem("likedPhotos", JSON.stringify(updatedLikedPhotos));

      // Update the displayAlert and liked state
      setDisplayAlert(false);
      toggleFavorite(photoId);
    }
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
