// frontend/src/components/PhotoList.jsx

import React, { useState, useCallback } from "react";
import PhotoListItem from "./PhotoListItem";
import PhotoDetailsModal from "../routes/PhotoDetailsModal";
import "../styles/PhotoList.scss";

/**
 * PhotoList Component
 * Renders a list of photos and provides an option to view details of a selected photo in a modal.
 *
 * @param {Array} props.photos - Array of photo objects.
 */

const PhotoList = ({ photos }) => {
  // State for modal visibility and selected photo
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  // Handler for when a photo is clicked
  const handlePhotoClick = useCallback((photoData) => {
    setSelectedPhoto(photoData);
    setIsModalOpen(true);
  }, []);

  // Handler to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPhoto(null);
  };

  return (
    <div>
      <ul className="photo-list">
        {photos.map((photoData) => (
          <PhotoListItem
            key={photoData.id}
            data={photoData}
            onPhotoClick={handlePhotoClick}
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
