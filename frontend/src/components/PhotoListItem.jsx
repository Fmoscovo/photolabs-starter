// frontend/src/components/PhotoListItem.jsx
import React from "react";
import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  const { id, location, imageSource, username, profile } = props.data;
  const formattedLocation = `${location.city}, ${location.country}`;

  return (
    <div className="photo-list__item" data-id={id}>
      <img src={imageSource} alt={username} className="photo-list__image" />
      <div className="photo-list__user-details">
        <div className="photo-list__user-info">
          <img
            src={profile}
            alt={`${username}'s profile`}
            className="photo-list__user-profile"
          />
          {username}
          <div className="photo-list__user-location">{formattedLocation}</div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
