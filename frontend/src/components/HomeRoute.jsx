// frontend/src/components/HomeRoute.jsx

import React, { useEffect, useReducer } from "react";
import TopNavigationBar from "./TopNavigationBar";
import PhotoList from "./PhotoList";
import "../styles/HomeRoute.scss";

const ACTIONS = {
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.SET_PHOTO_DATA:
      return { ...state, photos: action.payload.photos };
    default:
      return state;
  }
}

const HomeRoute = () => {
  const [state, dispatch] = useReducer(reducer, {
    photos: [],
    topics: [],
  });

  useEffect(() => {
    fetch("http://localhost:8001/api/photos")
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: ACTIONS.SET_PHOTO_DATA,
          payload: { photos: data }, // Use the whole data as photos
        });
      })
      .catch((error) => {
        console.error("Error fetching photo data:", error);
      });
  }, []);

  return (
    <div className="home-route">
      <TopNavigationBar topics={state.topics} />
      <PhotoList photos={state.photos} />
    </div>
  );
};

export default HomeRoute;
