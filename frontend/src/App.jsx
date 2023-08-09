// App.jsx
//-------------------Imports--------------------------------
import React from "react";
import PhotoListItem from "./components/PhotoListItem";
import "./App.scss";
//----------------------Component-----------------------------

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
    <div className="App photo-list">
      {" "}
      {/* Added the class "photo-list" as per the given note */}
      {new Array(3).fill(null).map((_, index) => (
        <PhotoListItem key={index} data={sampleDataForPhotoListItem} />
      ))}
    </div>
  );
};
//-------------------
export default App;
