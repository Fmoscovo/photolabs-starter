// frontend/src/components/PhotoSkeleton.jsx

import React from "react";
import "../styles/PhotoSkeleton.scss";

const PhotoSkeleton = () => {
  return (
    <div className="photo-skeleton">
      <div className="skeleton-image"></div>
      <div className="skeleton-caption"></div>
    </div>
  );
};

export default PhotoSkeleton;
