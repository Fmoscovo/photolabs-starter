//frontend/src/components/PhotoListItem.jsx
import React from "react";
import PhotoFavButton from "./PhotoFavButton";
import UserDetails from "./UserDetails";
import "../styles/PhotoListItem.scss";

/**
 * PhotoListItem Component
 * Renders individual photos with associated user details and favorite options.
 *
 * @param {Object} data - The photo data.
 * @param {Function} onPhotoClick - The handler for photo clicks.
 */
const PhotoListItem = ({ data, onPhotoClick }) => {
  const handleItemClick = () => onPhotoClick(data);

  return (
    <div
      className="photo-list__item"
      data-id={data.id}
      onClick={handleItemClick}
    >
      <img
        src={data.urls.regular}
        alt={data.user.username}
        className="photo-list__image"
      />
      <PhotoFavButton photoId={data.id} />
      <div className="photo-list__name-location">
        <UserDetails user={data.user} location={data.location} />
      </div>
    </div>
  );
};

export default React.memo(PhotoListItem);
