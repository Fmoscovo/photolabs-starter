// frontend/src/components/PhotoList.jsx

import React, { useState, useCallback, useEffect } from "react"; // Added useEffect import
import PhotoListItem from "./PhotoListItem";
import PhotoDetailsModal from "../routes/PhotoDetailsModal";
import "../styles/PhotoList.scss";
import PhotoSkeleton from "../components/PhotoSkeleton";

/**
 * PhotoList Component
 * Renders a list of photos and displays details in a modal when a photo is clicked.
 *
 * @param {Array} props.photos - Array of photo objects.
 */
const PhotoList = ({ photos }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  useEffect(() => {
    if (photos && photos.length) {
      setIsLoading(false);
    }
  }, [photos]);

  // Callback function for when a photo is clicked
  const handlePhotoClick = useCallback((photoData) => {
    setSelectedPhoto(photoData);
    setIsModalOpen(true);
  }, []);

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPhoto(null);
  };

  return (
    <div>
      {isLoading ? (
        <PhotoSkeleton />
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};

export default PhotoList;
