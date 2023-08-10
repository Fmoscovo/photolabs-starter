// frontend/src/components/PhotoListItem.jsx

// --- Imports -----------------------
import React from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";

// --- PhotoListItem Component ------------------------
// This component renders individual photo items. Each item includes the photo itself, a favorite button, and details about the user who uploaded the photo.
const PhotoListItem = ({ data }) => {
  return (
    <div className="photo-list__item" data-id={data.id}>
      {/* Displaying the photo */}
      <img
        src={data.urls.regular}
        alt={data.user.username}
        className="photo-list__image"
      />

      {/* Favorite button for the photo */}
      <PhotoFavButton />

      {/* User details section */}
      <div className="photo-list__user-details">
        <div className="photo-list__user-info">
          {/* User profile picture */}
          <img
            src={data.user.profile}
            alt={`${data.user.name}'s profile`}
            className="photo-list__user-profile"
          />
          {/* User's name */}
          {data.user.name}

          {/* User's location */}
          <div className="photo-list__user-location">
            {`${data.location.city}, ${data.location.country}`}
          </div>
        </div>
      </div>
    </div>
  );
};
// --- Exports -----------------------
export default PhotoListItem;
