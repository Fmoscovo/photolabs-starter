// frontend/src/components/TopicList.jsx

// ------------------- Imports -----------------------
import React from "react";
import TopicListItem from "./TopicListItem"; // Component to display individual topics
import "../styles/TopicList.scss"; // Styles for the TopicList component

// Sample data to be used for the topics list.
const sampleDataForTopicList = [
  {
    id: "1",
    slug: "topic-1",
    title: "Nature",
  },
  {
    id: "2",
    slug: "topic-2",
    title: "Travel",
  },
  {
    id: "3",
    slug: "topic-3",
    title: "People",
  },
  {
    id: "4",
    slug: "topic-4",
    title: "Food",
  },
  {
    id: "5",
    slug: "topic-5",
    title: "Animals",
  },
  {
    id: "6",
    slug: "topic-6",
    title: "Buildings",
  },
  {
    id: "7",
    slug: "topic-7",
    title: "Fashion",
  },
];

// ------------------- TopicList Component ------------------------
// This component is responsible for rendering a list of topics.
// It maps over the sampleDataForTopicList to generate multiple TopicListItem components.
const TopicList = () => {
  return (
    <div className="top-nav-bar__topic-list">
      {sampleDataForTopicList.map((topic) => (
        <TopicListItem key={topic.id} label={topic.title} slug={topic.slug} /> // Render each topic as an individual item
      ))}
    </div>
  );
};

export default TopicList;
