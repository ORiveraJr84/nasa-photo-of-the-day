import React, { useEffect, useState } from "react";
import Axios from "axios";
import InfoPanel from "./InfoPanel";

const ImgCard = () => {
  const [photoInfo, setPhotoInfo] = useState([]);
  const [date, setdate] = useState("2020-09-21");
  const [mouseMove, setMouseMove] = useState(false);

  let arrowsTimeout;

  const showArrows = () => {
    setMouseMove(true);
    document.querySelector("body").style = "cursor: initial";
    if (arrowsTimeout) {
      clearTimeout(arrowsTimeout);
    }
    arrowsTimeout = setTimeout(() => {
      setMouseMove(false);
      document.querySelector("body").style = "cursor: none";
    }, 3000);
  };

  document.addEventListener("mousemove", () => {
    showArrows();
  });

  useEffect(() => {
    Axios.get(
      `https://api.nasa.gov/planetary/apod?api_key=7bsJwnryUlSSQkTVLzqEE1JRtm5P4QuJ9Dv3hfIl&date=${date}`
    )
      .then((succesMessage) => {
        // console.log("Success Message ---->", succesMessage.data);
        setPhotoInfo(succesMessage.data);
      })
      .catch((errorMessage) => {
        console.log("Error Message ---->", errorMessage);
      });
  }, []);

  return (
    <div
      id="picture"
      style={{
        backgroundImage: `url(${photoInfo.url})`,
      }}
      alt={photoInfo.title}
    >
      <div
        id="arrows"
        style={mouseMove ? { opacity: "100" } : { opacity: "0" }}
      >
        <button id="leftArrow" className="arrow">
          &#10216;
        </button>
        <button className="arrow">&#10217;</button>
      </div>
      <InfoPanel photoInfo={photoInfo} date={date} />
    </div>
  );
};

export default ImgCard;
