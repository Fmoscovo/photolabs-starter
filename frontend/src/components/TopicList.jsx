// frontend/src/components/TopicList.jsx

import React from "react";
import PropTypes from "prop-types";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";

const TopicList = ({ topics = [] }) => {
  return (
    <div className="top-nav-bar__topic-list">
      {topics.map((topic) => (
        <TopicListItem key={topic.id} label={topic.title} slug={topic.slug} />
      ))}
    </div>
  );
};

TopicList.propTypes = {
  topics: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired, // Change id prop type to string
      title: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    })
  ),
};

export default TopicList;
