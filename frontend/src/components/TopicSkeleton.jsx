// frontend/src/components/TopicSkeleton.jsx

import React from "react";
import "../styles/TopicSkeleton.scss";

const TopicSkeleton = () => {
  return (
    <div className="topic-skeleton">
      <div className="skeleton-title"></div>
      <div className="skeleton-slug"></div>
    </div>
  );
};

export default TopicSkeleton;
