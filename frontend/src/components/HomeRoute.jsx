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
  SET_SELECTED_TOPIC: "SET_SELECTED_TOPIC",
  SET_LOADING: "SET_LOADING",
};

// Reducer for managing the state of the HomeRoute component
function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.SET_PHOTO_DATA:
      return { ...state, photos: shuffle(action.payload.photos) };
    case ACTIONS.SET_SELECTED_TOPIC:
      return { ...state, selectedTopic: action.payload };
    case ACTIONS.SET_LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
}

/**
 * HomeRoute Component
 * Fetches and displays the list of photos and topics.
 */
const HomeRoute = () => {
  const [state, dispatch] = useReducer(reducer, {
    photos: [],
    selectedTopic: null,
  });
  const [topicState, topicDispatch] = useReducer(topicReducer, {
    topics: [],
  });

  // Fetch photos based on selected topic
  const fetchPhotosByTopic = (topicId) => {
    dispatch({ type: ACTIONS.SET_LOADING, payload: true });

    fetch(`http://localhost:8001/api/topics/photos/${topicId}`)
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: ACTIONS.SET_PHOTO_DATA,
          payload: { photos: data },
        });
      })
      .catch((error) => {
        console.error("Error fetching photos by topic:", error);
      })
      .finally(() => {
        dispatch({ type: ACTIONS.SET_LOADING, payload: false });
      });
  };

  const handleTopicSelect = (topicId) => {
    fetchPhotosByTopic(topicId);
  };

  // Fetch photos and topics on component mount
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
        topicDispatch({
          type: TOPIC_ACTIONS.SET_TOPIC_DATA,
          payload: { topics: data },
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
      {state.loading ? (
        <div>Loading...</div>
      ) : (
        <PhotoList photos={state.photos} selectedTopic={state.selectedTopic} />
      )}
    </div>
  );
};

export default HomeRoute;
