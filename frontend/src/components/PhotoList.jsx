// frontend/src/components/PhotoList.jsx

// --- Imports -----------------------
import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

// --- PhotoList Component ------------------------
// This component displays a list of photos using PhotoListItem components.
const PhotoList = ({ photos, setIsModalOpen }) => {
  return (
    <ul className="photo-list">
      {photos.map((photoData) => (
        <PhotoListItem
          key={photoData.id}
          data={photoData}
          setIsModalOpen={setIsModalOpen}
        />
      ))}
    </ul>
  );
};
// --- Exports -----------------------
export default PhotoList;
