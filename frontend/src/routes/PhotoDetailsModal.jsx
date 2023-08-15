//frontend/src/routes/PhotoDetailsModal.jsx
import React, { useState, useEffect } from "react";
import PhotoFavButton from "../components/PhotoFavButton";
import "../styles/PhotoDetailsModal.scss";
import UserDetails from "../components/UserDetails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import PhotoDetailsSkeleton from "../components/PhotoDetailsSkeleton";

/**
 * PhotoDetailsModal Component
 * Displays detailed information about a photo in a modal. This includes the main photo,
 * its user details, and similar photos. The modal can be closed either by pressing the
 * close button, by clicking outside the modal or by pressing the escape key.
 *
 * @param {Object} props
 * @param {Function} props.closeModal - The handler to close the modal.
 * @param {Object} props.photo - The photo object containing details.
 * @returns {React.Element} Rendered component.
 */
const PhotoDetailsModal = ({ closeModal: closeHandler, photo }) => {
  const [isClosing, setIsClosing] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Added this
  const [theme, setTheme] = useState("light");

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      handleClose();
    }
  };

  useEffect(() => {
    if (photo) {
      setIsLoading(false);
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
      {isLoading ? (
        <PhotoDetailsSkeleton />
      ) : (
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
            <FontAwesomeIcon
              icon={faTimesCircle}
              style={{ color: "inherit" }}
            />
          </button>
          <div className="photo-container main-photo">
            <img
              src={photo.urls.regular}
              alt={photo.user.username}
              className="photo-details-modal--image"
            />
            <PhotoFavButton photoId={photo.id} />
            <UserDetails user={photo.user} location={photo.location} />
          </div>
          <h2 className="photo-details-modal--header">Similar Photos</h2>
          <div className="photo-details-modal--similar-photos">
            {Object.values(photo.similar_photos).map((similarPhoto) => (
              <div className="photo-container" key={similarPhoto.id}>
                <img
                  src={similarPhoto.urls.regular}
                  alt={similarPhoto.user.username}
                />
                <PhotoFavButton photoId={similarPhoto.id} />
                <div
                  className="photo-details-modal__photographer-details"
                  id="uniquePhotographerDetails"
                >
                  {similarPhoto.user.profile_image?.small && (
                    <img
                      src={similarPhoto.user.profile_image.small}
                      alt={`${similarPhoto.user.username}'s profile`}
                    />
                  )}
                  <UserDetails
                    className="similar-user-details"
                    user={similarPhoto.user}
                    location={similarPhoto.location}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoDetailsModal;
