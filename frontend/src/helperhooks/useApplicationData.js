//frontend/src/helperhooks/useApplicationData.js
import { useReducer } from 'react';

// Define the action types for better code clarity and management
export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'
}

/**
 * Reducer function to update the application state based on actions.
 * @param {Object} state - Current application state.
 * @param {Object} action - Action object containing type and payload.
 * @returns {Object} - Updated application state.
 */
function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      const { ids } = action.payload;
      return {
        ...state,
        // Logic for adding favorite photos using `ids` goes here...
      };
    case ACTIONS.FAV_PHOTO_REMOVED:
      const { id } = action.payload;
      return {
        ...state,
        // Logic for removing a favorite photo using `id` goes here...
      };
    // Add more cases for other action types as needed
    default:
      throw new Error(`Tried to reduce with unsupported action type: ${action.type}`);
  }
}

/**
 * Custom hook to manage and provide application data and actions.
 * @returns {Object} - Contains state and methods to update the state.
 */
function useApplicationData() {
  const [state, dispatch] = useReducer(reducer, {
    // Define initial state values for the application here...
  });

  // Add a photo to favorites
  const updateToFavPhotoIds = (ids) => {
    dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: { ids } });
  };

  // Remove a photo from favorites
  const removeFromFavPhotoIds = (id) => {
    dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: { id } });
  };

  // Handle photo selection
  const onPhotoSelect = (photo) => {
    // Logic for selecting a photo...
  };

  // Handle topic loading
  const onLoadTopic = (topic) => {
    // Logic for loading a topic...
  };

  // Close the photo details modal
  const onClosePhotoDetailsModal = () => {
    // Logic for closing the photo details modal...
  };

  return {
    state,
    onPhotoSelect,
    updateToFavPhotoIds,
    removeFromFavPhotoIds,
    onLoadTopic,
    onClosePhotoDetailsModal,
  };
}

export default useApplicationData;
