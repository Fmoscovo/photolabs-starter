// frontend/src/components/TopicList.jsx

import React from "react";
import PropTypes from "prop-types";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";

/**
 * TopicList Component
 * Renders a list of topics.
 *
 * @param {Array} topics - An array of topic objects to render.
 */
const TopicList = ({ topics = [] }) => (
  <div className="top-nav-bar__topic-list">
    {topics.map((topic) => (
      <TopicListItem key={topic.id} label={topic.title} slug={topic.slug} />
    ))}
  </div>
);

TopicList.propTypes = {
  topics: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    })
  ),
};

TopicList.defaultProps = {
  topics: [],
};

export default TopicList;
