import React, { useState } from "react";

const Header = () => {
  const [hidden, sethidden] = useState(true);

  const hide = () => {
    sethidden(!hidden);
    let infoPanel = document.querySelector("#infoPanel");
    infoPanel.classList.toggle("hidden");
  };

  return (
    <header id="header">
      <a href="#">
        <img
          id="logo"
          src="https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/nasa-logo.svg"
          alt="Nasa Logo"
        ></img>
      </a>
      <button id="info-toggle" href="index.html" onClick={hide}>
        {hidden ? "i" : "x"}
      </button>
    </header>
  );
};

export default Header;
