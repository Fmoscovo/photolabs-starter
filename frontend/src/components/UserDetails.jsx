//frontend/src/components/UserDetails.jsx

import React from "react";
import "../styles/PhotoListItem.scss";

const UserDetails = ({
  user: { profile, name },
  location: { city, country },
}) => (
  <div className="photo-list__user-info">
    {/* Display the user's profile picture */}
    <img
      src={profile}
      alt={`${name}'s profile`}
      className="photo-list__user-profile"
    />

    <div>
      {/* Display the user's name */}
      <div>{name}</div>

      {/* Display the user's location */}
      <div className="photo-list__user-location">{`${city}, ${country}`}</div>
    </div>
  </div>
);

export default UserDetails;
