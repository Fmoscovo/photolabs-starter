// frontend/src/components/PhotoDetailsSkeleton.jsx

import React from "react";
import "../styles/PhotoDetailsSkeleton.scss";

const PhotoDetailsSkeleton = () => {
  return (
    <div className="photo-details-skeleton">
      <div className="skeleton-image"></div>
      <div className="skeleton-title"></div>
      <div className="skeleton-description"></div>
      <div className="skeleton-author"></div>
    </div>
  );
};

export default PhotoDetailsSkeleton;
