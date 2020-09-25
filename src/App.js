import React from "react";
import "./App.css";
import "./reset.css";
import Header from "./components/Header";
import ImgCard from "./components/ImgCard";

function App() {
  return (
    <div className="App">
      <Header />
      <ImgCard />
    </div>
  );
}

// https://api.nasa.gov/planetary/apod?api_key=7bsJwnryUlSSQkTVLzqEE1JRtm5P4QuJ9Dv3hfIl <---- API Request with Key
// https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/nasa-logo.svg <----- Nasa Logo

export default App;
