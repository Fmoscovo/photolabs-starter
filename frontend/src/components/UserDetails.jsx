import React from "react";
import "../styles/PhotoListItem.scss";

const UserDetails = ({ user, location }) => (
  <div className="photo-list__user-info">
    {/* User profile picture */}
    <img
      src={user.profile}
      alt={`${user.name}'s profile`}
      className="photo-list__user-profile"
    />

    <div>
      {/* User's name */}
      <div>{user.name}</div>

      {/* User's location */}
      <div className="photo-list__user-location">
        {`${location.city}, ${location.country}`}
      </div>
    </div>
  </div>
);

export default UserDetails;
