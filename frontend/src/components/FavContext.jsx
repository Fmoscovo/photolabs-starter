//frontend/src/components/FavContext.jsx
import React, { createContext, useContext, useState, useEffect } from "react";

const FavContext = createContext();

export const FavProvider = ({ children }) => {
  const [likedPhotos, setLikedPhotos] = useState([]);

  useEffect(() => {
    const storedPhotos = JSON.parse(localStorage.getItem("likedPhotos")) || [];
    setLikedPhotos([...new Set(storedPhotos)]);
  }, []);

  const isFavorited = (photoId) => likedPhotos.includes(photoId);

  const toggleFavorite = (photoId) => {
    console.log("Toggling favorite for photo ID:", photoId);
    console.log("Current liked photos:", likedPhotos);

    let updatedPhotos = [];
    if (isFavorited(photoId)) {
      updatedPhotos = likedPhotos.filter((id) => id !== photoId);
      console.log("Removing photo ID from liked photos:", updatedPhotos);
    } else {
      updatedPhotos = [...likedPhotos, photoId];
      console.log("Adding photo ID to liked photos:", updatedPhotos);
    }

    localStorage.setItem("likedPhotos", JSON.stringify(updatedPhotos));
    const storedPhotos = JSON.parse(localStorage.getItem("likedPhotos"));
    setLikedPhotos(storedPhotos);
  };

  return (
    <FavContext.Provider value={{ likedPhotos, isFavorited, toggleFavorite }}>
      {children}
    </FavContext.Provider>
  );
};

export const useFav = () => {
  return useContext(FavContext);
};
