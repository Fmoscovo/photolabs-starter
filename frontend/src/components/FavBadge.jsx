// frontend/src/components/FavBadge.jsx

// ------------------- Imports -----------------------
import React, { useState } from "react";
import PropTypes from "prop-types";
import FavIcon from "./FavIcon";
import "../styles/FavBadge.scss";

// ------------------- FavBadge Component ------------------------
const FavBadge = ({ isFavPhotoExist }) => {
  // Local state to track hover
  const [isHovered, setIsHovered] = useState(false);

  // Handle click event
  const handleClick = () => {
    alert("Favorites feature coming soon!");
  };

  return (
    // Clickable badge container
    <div
      className="fav-badge"
      onClick={handleClick}
      title="View favorites"
      onMouseEnter={() => setIsHovered(true)} // Set hover state to true
      onMouseLeave={() => setIsHovered(false)} // Set hover state to false
    >
      {/* FavIcon component with hover and selected states */}
      <FavIcon displayAlert={!!isFavPhotoExist} selected={isHovered} />
    </div>
  );
};

// ------------------- Prop Types and Default Props ------------------------
FavBadge.propTypes = {
  isFavPhotoExist: PropTypes.bool,
};

// FavBadge.defaultProps = {
//   isFavPhotoExist: false,
// };

// ------------------- Export ------------------------
export default FavBadge;
