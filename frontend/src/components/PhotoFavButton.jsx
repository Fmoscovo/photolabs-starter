// fronted/src/components/PhotoFavButton.jsx

// ------------------- Imports -----------------------
import React, { useState } from "react";
import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

// ------------------- PhotoFavButton Component ------------------------
// This component renders a button for favoriting a photo.
// Clicking the button toggles its favorited state.
function PhotoFavButton() {
  // State for tracking whether the photo is favorited or not.
  const [isFavorited, setIsFavorited] = useState(false);

  // Toggle favorite status and prevent the event from propagating to other elements.
  const toggleFavorite = (event) => {
    event.stopPropagation();
    event.preventDefault();
    setIsFavorited((prevState) => !prevState);
    console.log("Icon clicked!"); // For debugging purposes.
  };

  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        {/* The FavIcon component is rendered with the current favorited status and click handler. */}
        <FavIcon selected={isFavorited} onClick={toggleFavorite} />
      </div>
    </div>
  );
}

export default PhotoFavButton;
