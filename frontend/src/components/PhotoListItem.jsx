// frontend/src/components/PhotoListItem.jsx

import React from "react";
import PhotoFavButton from "./PhotoFavButton";
import UserDetails from "./UserDetails";
import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ data, onPhotoClick }) => {
  return (
    <div
      className="photo-list__item"
      data-id={data.id}
      onClick={() => onPhotoClick(data)}
    >
      <img
        src={data.urls.regular}
        alt={data.user.username}
        className="photo-list__image"
      />
      <PhotoFavButton photoId={data.id} />
      <UserDetails user={data.user} location={data.location} />
    </div>
  );
};

export default React.memo(PhotoListItem);
