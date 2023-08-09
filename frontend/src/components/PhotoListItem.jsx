// frontend/src/components/PhotoListItem.jsx
import React from "react";
import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  const { id, location, imageSource, username, profile } = props.data;
  const formattedLocation = `${location.city}, ${location.country}`;

  return (
    <div className="photo-list-item" data-id={id}>
      <img src={imageSource} alt={username} className="photo-image" />
      <div className="photo-details">
        <div className="photo-username">
          <img src={profile} alt={`${username}'s profile`} className="profile-image" />
          {username}
          <div className="photo-location">{formattedLocation}</div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;

