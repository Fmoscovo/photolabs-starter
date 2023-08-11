//fronte
import React, { useState, useEffect } from "react";
import PhotoFavButton from "../components/PhotoFavButton";
import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const PhotoDetailsModal = ({ closeModal: closeHandler, photo }) => {
  const [isClosing, setIsClosing] = useState(false); // <-- Declare isClosing state

  useEffect(() => {
    console.log("PhotoDetailsModal Log:", photo);
    // When the modal is open, prevent background scrolling.
    if (photo) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => {
      // Cleanup: Ensure that the class is removed when the component unmounts.
      document.body.classList.remove("no-scroll");
    };
  }, [photo]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      closeHandler();
      setIsClosing(false);
    }, 500);
  };

  const handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return (
    <div onClick={handleOutsideClick} className="modal-container">
      <div
        className="photo-details-modal"
        data-transition-style={
          isClosing
            ? "out:polygon:opposing-corners"
            : "in:polygon:opposing-corners"
        }
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="photo-details-modal__close-button"
          onClick={handleClose}
        >
          <FontAwesomeIcon icon={faTimesCircle} />
        </button>

        {/* Main Photo */}
        <div className="photo-container main-photo">
          <img
            src={photo.urls.regular}
            alt={photo.user.username}
            className="photo-details-modal--image"
          />
          <PhotoFavButton photoId={photo.id} />

          {/* Location
          {photo.location && photo.location.title ? (
            <div className="photo-location">{photo.location.title}</div>
          ) : null} */}
        </div>

        <h2 className="photo-details-modal--header"> Similar Photos</h2>

        {/* Display Similar Photos */}
        <div className="photo-details-modal--similar-photos">
          {Object.values(photo.similar_photos).map((similarPhoto) => (
            <div className="photo-container" key={similarPhoto.id}>
              <img
                src={similarPhoto.urls.regular}
                alt={similarPhoto.user.username}
              />
              <PhotoFavButton photoId={similarPhoto.id} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
