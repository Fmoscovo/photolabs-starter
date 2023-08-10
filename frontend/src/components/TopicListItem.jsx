// frontend/src/components/TopicListItem.jsx
// ------------------- Imports -----------------------
import React from "react";
import "../styles/TopicListItem.scss"; // Styles for the TopicListItem component

// ------------------- TopicListItem Component ------------------------
// This component displays an individual topic.
// It takes in 'label' (the name of the topic) and 'slug' (a unique identifier).
// For now, only 'label' is used for display.
const TopicListItem = ({ label, slug }) => {
  return (
    <div className="topic-list__item">
      <span>{label}</span>
    </div>
  );
};

export default TopicListItem;
