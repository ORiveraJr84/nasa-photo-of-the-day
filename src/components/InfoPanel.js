import React from "react";

const rearrangeDate = (arr) => {
  let dateArr = arr.split("-");
  let first = dateArr.splice(0, 1);
  dateArr.push(first[0]);
  return dateArr.join("-");
};

const InfoPanel = ({ photoInfo, date }) => {
  date = rearrangeDate(date);

  return (
    <div id="infoPanel" className="infoPanel hidden">
      <span id="datePicker">{date}</span>
      <h2 id="title">{photoInfo.title}</h2>
      <p>{photoInfo.explanation}</p>
    </div>
  );
};

export default InfoPanel;
