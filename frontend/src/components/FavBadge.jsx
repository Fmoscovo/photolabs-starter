// frontend/src/components/FavBadge.jsx

import React, { useState } from "react";
import PropTypes from "prop-types";
import FavIcon from "./FavIcon";
import "../styles/FavBadge.scss";

const FavBadge = ({ isFavPhotoExist, favCount }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    const message = isFavPhotoExist
      ? "You have favorites!"
      : "No photos have been marked as favorite yet.";
    alert(message);
  };

  return (
    <div
      className="fav-badge"
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

FavBadge.propTypes = {
  isFavPhotoExist: PropTypes.bool.isRequired,
  favCount: PropTypes.number,
};

FavBadge.defaultProps = {
  favCount: 0,
};

export default FavBadge;
