import React from "react";

const PhotoDisplay = props => {

  return (
    <div id="photo-display-container">
      <i
        className="icon-chevron-left direction-arrow"
        onClick={() => props.changeImage("previous")}
      />
      <img
        src={props.photo.photoUrl}
        id="currentImage"
        alt="loading..."
      />
      <i
        className="icon-chevron-right direction-arrow"
        onClick={() => props.changeImage("next")}        
      />
    </div>
  );
};

export default PhotoDisplay