import React, { useState, useEffect } from "react";

const PhotoShow = (props) => {
  return (
    <div>
      <h2> {props.location} </h2>
      <p>{props.url}</p>
      <p>{props.share}</p>
      <p>{props.date}</p>
    </div>
  )
}

export default PhotoShow;
