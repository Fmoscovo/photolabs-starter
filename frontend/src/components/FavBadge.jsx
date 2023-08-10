// frontend/src/components/FavBadge.jsx

// ------------------- Imports -----------------------
import React, { useState } from "react";
import PropTypes from "prop-types";
import FavIcon from "./FavIcon";
import "../styles/FavBadge.scss";

// ------------------- FavBadge Component ------------------------
const FavBadge = ({ isFavPhotoExist, favCount }) => {
  // Local state to track hover
  const [isHovered, setIsHovered] = useState(false);

  // Handle click eventconFavBadge
  const handleClick = () => {
    if (isFavPhotoExist) {
      alert("You have favorites!"); // Or any other action you'd like
    } else {
      alert("No photos have been marked as favorite yet.");
    }
  };

  return (
    <div
      className="fav-badge"
      onClick={handleClick}
      title="View favorites"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <FavIcon displayAlert={!!isFavPhotoExist} selected={isHovered} />
      {isFavPhotoExist && (
        <div className="fav-badge__count">
          <span>{favCount}</span>
        </div>
      )}
    </div>
  );
};

FavBadge.propTypes = {
  isFavPhotoExist: PropTypes.bool.isRequired,
  favCount: PropTypes.number,
};

// ------------------- Export ------------------------
export default FavBadge;
