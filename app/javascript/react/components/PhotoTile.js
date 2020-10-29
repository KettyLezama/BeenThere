import React from 'react';

const PhotoTile = (props) => {

  return (
    <div>
      <p>{props.name}</p>
      <p>{props.description}</p>
    </div>
  )
}

export default PhotoTile;