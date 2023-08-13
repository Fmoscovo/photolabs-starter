// frontend/src/components/HomeRoute.jsx

import React, { useEffect, useReducer, useState } from "react";
import TopNavigationBar from "./TopNavigationBar";
import PhotoList from "./PhotoList";
import { shuffle } from "lodash";
import "../styles/HomeRoute.scss";
import {
  ACTIONS as TOPIC_ACTIONS,
  topicReducer,
} from "../helperhooks/TopicListReducer";

const ACTIONS = {
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.SET_PHOTO_DATA:
      // Shuffle the array of photos randomly
      const shuffledPhotos = shuffle(action.payload.photos);
      return { ...state, photos: shuffledPhotos };
    case ACTIONS.SET_SELECTED_TOPIC:
      return { ...state, selectedTopic: action.payload };
    default:
      return state;
  }
}

const HomeRoute = () => {
  const [state, dispatch] = useReducer(reducer, {
    photos: [],
    topics: [],
    selectedTopic: null, // Add selectedTopic to the state
  });

  const [topicState, topicDispatch] = useReducer(topicReducer, {
    topics: [], // Initialize with empty topics array
  });

  const handleTopicSelect = (topicId) => {
    console.log("Selected topic ID:", topicId);
    dispatch({ type: ACTIONS.SET_SELECTED_TOPIC, payload: topicId });
  };

  useEffect(() => {
    fetch("http://localhost:8001/api/photos")
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: ACTIONS.SET_PHOTO_DATA,
          payload: { photos: data },
        });
      })
      .catch((error) => {
        console.error("Error fetching photo data:", error);
      });

    fetch("http://localhost:8001/api/topics")
      .then((response) => response.json())
      .then((data) => {
        // Convert topic IDs to strings
        const topicsWithStrings = data.map((topic) => ({
          ...topic,
          id: topic.id.toString(),
        }));

        topicDispatch({
          type: TOPIC_ACTIONS.SET_TOPIC_DATA,
          payload: { topics: topicsWithStrings },
        });
      })
      .catch((error) => {
        console.error("Error fetching topic data:", error);
      });
  }, []);

  return (
    <div className="home-route">
      <TopNavigationBar
        topics={topicState.topics}
        onSelectTopic={handleTopicSelect}
      />

      <PhotoList photos={state.photos} selectedTopic={state.selectedTopic} />
    </div>
  );
};

export default HomeRoute;
