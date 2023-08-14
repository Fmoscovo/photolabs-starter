// frontend/src/components/FavBadge.jsx

import React, { useState } from "react";
import FavIcon from "./FavIcon";
import { useFav } from "./FavContext";
import "../styles/FavBadge.scss";

const FavBadge = () => {
  const { likedPhotos } = useFav();

  const isFavPhotoExist = likedPhotos.length > 0;
  const favCount = likedPhotos.length;
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    const message = isFavPhotoExist
      ? "You have favorites!"
      : "No photos have been marked as favorite yet.";
    alert(message);
  };

  return (
    <div
      className={`fav-badge ${isFavPhotoExist ? "has-favorites" : ""}`}
      onClick={handleClick}
      title="View favorites"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <FavIcon displayAlert={isFavPhotoExist} selected={isHovered} />
      {isFavPhotoExist && (
        <div className="fav-badge__count">
          <span>{favCount}</span>
        </div>
      )}
    </div>
  );
};

export default FavBadge;
