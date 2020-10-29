import React, { useState, useEffect } from "react"
import PhotoShow from "./PhotoShow"

const PhotoShowContainer = (props) => {
  const [getPhoto, setPhoto] = useState({
    location: "",
    url: "",
    share: "",
    date: ""
  });

  useEffect(() => {
    let photoId = props.match.params.id;
    fetch(`/api/v1/photos/${photoId}`)
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
        setPhoto(body)
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`));
  }, [])

  return (
    <PhotoShow
    location = {photo.id}
    url = {photo.url}
    share = {photo.share}
    date = {photo.date}
    />
  )
}

export default PhotoShowContainer