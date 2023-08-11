// frontend/src/components/PhotoList.jsx
import React, { useState, useCallback } from "react"; // <-- Import useState
import PhotoListItem from "./PhotoListItem";
import PhotoDetailsModal from "../routes/PhotoDetailsModal";
import "../styles/PhotoList.scss";

const PhotoList = ({ photos }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null); // <-- New state for selected photo

  const handlePhotoClick = useCallback((photoData) => {
    setSelectedPhoto(photoData);
    setIsModalOpen(true);
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPhoto(null); // reset the selected photo
  };

  return (
    <div>
      <ul className="photo-list">
        {photos.map((photoData) => (
          <PhotoListItem
            key={photoData.id}
            data={photoData}
            onPhotoClick={handlePhotoClick} // <-- Pass the new handler
          />
        ))}
      </ul>

      {isModalOpen && selectedPhoto && (
        <PhotoDetailsModal photo={selectedPhoto} closeModal={closeModal} />
      )}
    </div>
  );
};

export default PhotoList;
