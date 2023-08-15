import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import TopicListItem from "./TopicListItem";
import TopicSkeleton from "../components/TopicSkeleton"; // Import the skeleton component
import "../styles/TopicList.scss";

/**
 * TopicList Component
 * Renders a list of topics.
 *
 * @param {Array} topics - An array of topic objects to render.
 */
const TopicList = ({ topics = [], onSelectTopic }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (topics && topics.length) {
      setIsLoading(false);
    }
  }, [topics]);

  return (
    <>
      {isLoading ? (
        <TopicSkeleton />
      ) : (
        <div className="top-nav-bar__topic-list">
          {topics.map((topic) => (
            <TopicListItem
              key={topic.id}
              label={topic.title}
              slug={topic.slug}
              onSelect={() => onSelectTopic(topic.id)} // Pass the selected topic ID to the handler
            />
          ))}
        </div>
      )}
    </>
  );
};

TopicList.propTypes = {
  topics: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    })
  ).isRequired,
  onSelectTopic: PropTypes.func.isRequired,
};

TopicList.defaultProps = {
  topics: [],
};

export default TopicList;
