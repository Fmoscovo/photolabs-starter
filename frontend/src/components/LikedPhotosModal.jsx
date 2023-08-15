// frontend/src/components/LikedPhotosModal.jsx
import React, { useState, useEffect } from "react";
import UserDetails from "../components/UserDetails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import "../styles/LikedPhotosModal.scss"; // Make sure to define styles

const LikedPhotosModal = ({ isOpen, onClose }) => {
  const [isClosing, setIsClosing] = useState(false);
  const [theme, setTheme] = useState("light");

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      handleClose();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 500);
  };

  const handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      onClick={handleOutsideClick}
      className={`modal-container ${theme === "dark" ? "dark-theme" : ""}`}
    >
      <div
        className="liked-photos-modal"
        data-transition-style={
          isClosing
            ? "out:polygon:opposing-corners"
            : "in:polygon:opposing-corners"
        }
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className={`liked-photos-modal__close-button ${
            isClosing ? "closing" : ""
          }`}
          onClick={handleClose}
        >
          <FontAwesomeIcon icon={faTimesCircle} style={{ color: "inherit" }} />
        </button>
        <h2 className="liked-photos-modal--header">Liked Photos</h2>
        <div className="liked-photos-modal--photos">
          {/* Render liked photos here. Use your likedPhotos context or props. */}
        </div>
      </div>
    </div>
  );
};

export default LikedPhotosModal;
