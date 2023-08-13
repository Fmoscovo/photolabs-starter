// frontend/src/components/TopicListItem.jsx

import React from "react";
import "../styles/TopicListItem.scss";

/**
 * TopicListItem Component
 * Displays an individual topic.
 *
 * Props:
 * - label: the name of the topic.
 *
 * Note: A 'slug' prop can be added in the future as a unique identifier if needed.
 */
const TopicListItem = ({ label, onSelect }) => (
  <div className="topic-list__item" onClick={onSelect}>
    <span>{label}</span>
  </div>
);

export default TopicListItem;
