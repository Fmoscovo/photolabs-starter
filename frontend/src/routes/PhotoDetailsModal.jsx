//frontend/src/routes/PhotoDetailsModal.jsx
import React, { useState, useEffect } from "react";
import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";

const PhotoDetailsModal = ({ closeModal: closeHandler, photo }) => {
  const [isClosing, setIsClosing] = useState(false); // <-- Declare isClosing state

  useEffect(() => {
    console.log("PhotoDetailsModal Log:", photo); // <-- Log the photo details
  }, [photo]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      closeHandler();
      setIsClosing(false);
    }, 500);
  };

  // Function to handle clicks outside of the modal
  const handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) {
      // ensure it's not a child click
      handleClose();
    }
  };

  return (
    // Attach the handleOutsideClick function to the container
    <div onClick={handleOutsideClick} className="modal-container">
      <div
        className="photo-details-modal"
        data-transition-style={
          isClosing
            ? "out:polygon:opposing-corners"
            : "in:polygon:opposing-corners"
        }
        onClick={(e) => e.stopPropagation()} // prevent this click from reaching the container
      >
        <button
          className="photo-details-modal__close-button"
          onClick={handleClose}
        >
          <img src={closeSymbol} alt="close symbol" />
        </button>
        {/* other modal content... */}
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
