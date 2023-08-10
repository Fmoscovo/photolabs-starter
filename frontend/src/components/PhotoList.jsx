// frontend/src/components/PhotoList.jsx

// ------------------- Imports -----------------------
import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

// Sample data of a list of photos.
const sampleDataForPhotoList = [
  {
    id: "1",
    location: {
      city: "Montreal",
      country: "Canada",
    },
    urls: {
      full: `${process.env.PUBLIC_URL}/Image-1-Full.jpeg`,
      regular: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
    },
    user: {
      id: "1",
      username: "exampleuser",
      name: "Joe Example",
      profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
    },
  },
  {
    id: "2",
    location: {
      city: "Toronto",
      country: "Canada",
    },
    urls: {
      full: `${process.env.PUBLIC_URL}/Image-2-Full.jpeg`,
      regular: `${process.env.PUBLIC_URL}/Image-2-Regular.jpeg`,
    },
    user: {
      id: "2",
      username: "exampleuser",
      name: "Joe Example",
      profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
    },
  },
  {
    id: "3",
    location: {
      city: "Ottawa",
      country: "Canada",
    },
    urls: {
      full: `${process.env.PUBLIC_URL}/Image-3-Full.jpeg`,
      regular: `${process.env.PUBLIC_URL}/Image-3-Regular.jpeg`,
    },
    user: {
      id: "3",
      username: "exampleuser",
      name: "Joe Example",
      profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
    },
  },
];
// ------------------- PhotoList Component ------------------------
// This component renders a list of photos. Currently, it displays the same photo three times.
const PhotoList = () => {
  // Fetching the data for the image with the id of "1"
  const imageData = sampleDataForPhotoList.find((item) => item.id === "1");

  return (
    <ul className="photo-list">
      {/* Rendering the same photo three times */}
      {new Array(3).fill(null).map((_, index) => (
        <PhotoListItem key={index} data={imageData} />
      ))}
    </ul>
  );
};

export default PhotoList;
