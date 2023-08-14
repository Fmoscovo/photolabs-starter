import React, { createContext, useContext, useState, useEffect } from "react";

// Create a context for Favorites
const FavContext = createContext();

/**
 * FavProvider Component
 * Provides access to user's favorited photos, their current favorite status,
 * and functions to toggle favorite status.
 */
export const FavProvider = ({ children }) => {
  const [likedPhotos, setLikedPhotos] = useState([]);

  // Load liked photos from local storage on component mount
  useEffect(() => {
    const storedPhotos = JSON.parse(localStorage.getItem("likedPhotos")) || [];
    setLikedPhotos([...new Set(storedPhotos)]);
  }, []);

  const isFavorited = (photoId) => likedPhotos.includes(photoId);

  const toggleFavorite = (photoId) => {
    console.log("Toggling favorite for photo ID:", photoId);

    let updatedPhotos = [];
    if (isFavorited(photoId)) {
      updatedPhotos = likedPhotos.filter((id) => id !== photoId);
    } else {
      updatedPhotos = [...likedPhotos, photoId];
    }

    localStorage.setItem("likedPhotos", JSON.stringify(updatedPhotos));
    setLikedPhotos(updatedPhotos);
  };

  return (
    <FavContext.Provider value={{ likedPhotos, isFavorited, toggleFavorite }}>
      {children}
    </FavContext.Provider>
  );
};

// Custom hook to use the Favorites context
export const useFav = () => {
  return useContext(FavContext);
};
