// frontend/src/components/FavBadge.jsx

// ------------------- Imports -----------------------
import React, { useState } from "react"; // Import useState for local hover state
import PropTypes from "prop-types";
import FavIcon from "./FavIcon";

import "../styles/FavBadge.scss";

const FavBadge = ({ isFavPhotoExist }) => {
  const [isHovered, setIsHovered] = useState(false); // Local state to track hover

  const handleClick = () => {
    alert("Favorites feature coming soon!");
  };

  return (
    <div
      className="fav-badge"
      onClick={handleClick}
      title="View favorites"
      onMouseEnter={() => setIsHovered(true)} // Set hover state to true
      onMouseLeave={() => setIsHovered(false)} // Set hover state to false
    >
      <FavIcon displayAlert={!!isFavPhotoExist} selected={isHovered} />
      {/* Pass isHovered state as selected prop */}
    </div>
  );
};

FavBadge.propTypes = {
  isFavPhotoExist: PropTypes.bool,
};

FavBadge.defaultProps = {
  isFavPhotoExist: false,
};

export default FavBadge;
