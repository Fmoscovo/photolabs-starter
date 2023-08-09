import React from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ data }) => {
  return (
    <div className="photo-list__item" data-id={data.id}>
      <img
        src={data.imageSource}
        alt={data.username}
        className="photo-list__image"
      />

      <PhotoFavButton />

      <div className="photo-list__user-details">
        <div className="photo-list__user-info">
          <img
            src={data.profile}
            alt={`${data.username}'s profile`}
            className="photo-list__user-profile"
          />
          {data.username}
          <div className="photo-list__user-location">
            {`${data.location.city}, ${data.location.country}`}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
