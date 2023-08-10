//frontend/src/components/FavContext.jsx

import React, { createContext, useReducer, useContext } from "react";

//Define the context
export const FavContext = createContext();

//Initial state
const initialState = {
  favoritedPhotos: [],
};

//Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_FAVORITE":
      return {
        ...state,
        favoritedPhotos: [...state.favoritedPhotos, action.payload],
      };
    case "REMOVE_FAVORITE":
      return {
        ...state,
        favoritedPhotos: state.favoritedPhotos.filter(
          (photoId) => photoId !== action.payload
        ),
      };
    default:
      return state;
  }
};

//Define the provider component
export const FavProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <FavContext.Provider value={[state, dispatch]}>
      {children}
    </FavContext.Provider>
  );
};

//Custom hook to consume the context
export const useFav = () => {
  const [state, dispatch] = useContext(FavContext);
  if (state === undefined) {
    throw new Error("useFav must be used within a FavProvider");
  }

  const isFavorited = (photoId) => state.favoritedPhotos.includes(photoId);

  const toggleFavorite = (photoId) => {
    if (isFavorited(photoId)) {
      dispatch({ type: "REMOVE_FAVORITE", payload: photoId });
    } else {
      dispatch({ type: "ADD_FAVORITE", payload: photoId });
    }
  };

  const totalFavCount = state.favoritedPhotos.length;

  return {
    isFavorited,
    toggleFavorite,
    totalFavCount,
    state,
    dispatch,
  };
};
