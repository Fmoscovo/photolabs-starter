// frontend/src/App.jsx
//-------------------Imports--------------------------------
import React from "react";

import PhotoListItem from "./components/PhotoListItem";
import "./App.scss";
//----------------------Component-----------------------------
// Note: Rendering a single component to build components in isolation
const sampleDataForPhotoListItem = {
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
};
//----------------------App-----------------------------------
const App = () => {
  return (
    <div className="App">
      <PhotoListItem data={sampleDataForPhotoListItem} />
    </div>
  );
};
//----------------------Export--------------------------------
export default App;
