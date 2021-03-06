import React, { useState, useEffect } from 'react';
import PhotoTile from './PhotoTile';

const CollectionIndexComponent = (props) => {
  const [sharedPhotos, setSharedPhotos] = useState([]);
  
  useEffect(() => {
    fetch("/api/v1/photos")
      .then((response) => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
          throw error;
        }
      })
      .then((response) => response.json())
      .then((body) => {
        let sharedPhotos = body;
        setSharedPhotos(sharedPhotos);
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`));
  }, []);

  const sharedPhotosList = sharedPhotos.map((photo) => {
    return (
      <PhotoTile
        key={photo.id}
        imageUrl={photo.url}
      />
    );
  });

  return (
    <>
      <h1>Shared Photos</h1>
      {sharedPhotosList}
    </>
  )
}

export default CollectionIndexComponent;