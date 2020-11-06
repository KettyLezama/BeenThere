import React, { useState, useEffect } from 'react';
import PhotoTile from './PhotoTile';

const CollectionIndexComponent = (props) => {
  const [photoCollection, setPhotoCollection] = useState([]);
  let type = props.props.match.params.type;
  
  useEffect(() => {
    fetch(`/api/v1/photos/collection/${type}`)
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
        let photos = body.photoCollection;
        setPhotoCollection(photos);
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`));
  }, []);

  const photosList = photoCollection.map((photo) => {
    return (
      <PhotoTile
        key={photo.id}
        imageUrl={photo.url}
      />
    );
  });

  return (
    <>
      <h1>Photos</h1>
      {photosList}
    </>
  )
}

export default CollectionIndexComponent;