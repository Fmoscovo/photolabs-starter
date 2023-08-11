//frontend/src/routes/PhotoDetailsModal.jsx

import React, { useState, useEffect } from "react";
import PhotoFavButton from "../components/PhotoFavButton";
import "../styles/PhotoDetailsModal.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const PhotoDetailsModal = ({ closeModal: closeHandler, photo }) => {
  const [isClosing, setIsClosing] = useState(false);
  const [theme, setTheme] = useState("light"); // <-- New state for theme

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      handleClose();
    }
  };

  useEffect(() => {
    console.log("PhotoDetailsModal Log:", photo);

    if (photo) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.classList.remove("no-scroll");
      document.removeEventListener("keydown", handleKeyDown);
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
    <div
      onClick={handleOutsideClick}
      className={`modal-container ${theme === "dark" ? "dark-theme" : ""}`}
    >
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
          className={`photo-details-modal__close-button ${
            isClosing ? "closing" : ""
          }`}
          onClick={handleClose}
        >
          <FontAwesomeIcon icon={faTimesCircle} style={{ color: "inherit" }} />
        </button>
        <div className="photo-container main-photo">
          <img
            src={photo.urls.regular}
            alt={photo.user.username}
            className="photo-details-modal--image"
          />
          <PhotoFavButton photoId={photo.id} />
        </div>

        <h2 className="photo-details-modal--header"> Similar Photos</h2>

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
