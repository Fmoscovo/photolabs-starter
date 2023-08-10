// frontend/src/components/PhotoList.jsx

// --- Imports -----------------------
import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

// --- PhotoList Component ------------------------
// This component displays a list of photos using PhotoListItem components.
const PhotoList = ({ photos }) => {
  return (
    <ul className="photo-list">
      {photos.map((photoData) => (
        <PhotoListItem key={photoData.id} data={photoData} />
      ))}
    </ul>
  );
};
// --- Exports -----------------------
export default PhotoList;
