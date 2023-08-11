// frontend/src/components/UserDetails.jsx

import React from "react";
import "../styles/PhotoListItem.scss"; // Styles are already defined for the user details

const UserDetails = ({ user, location }) => (
  <div className="photo-list__user-details">
    <div className="photo-list__user-info">
      {/* User profile picture */}
      <img
        src={user.profile}
        alt={`${user.name}'s profile`}
        className="photo-list__user-profile"
      />

      {/* User's name */}
      {user.name}

      {/* User's location */}
      <div className="photo-list__user-location">
        {`${location.city}, ${location.country}`}
      </div>
    </div>
  </div>
);

export default UserDetails;
