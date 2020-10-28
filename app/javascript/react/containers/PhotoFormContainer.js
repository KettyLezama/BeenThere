import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import ErrorList from './ErrorList';

const PhotoFormContainer = props => {
  const [newPhoto, setNewPhoto] = useState({
    location: "",
    url: "",
    share: "",
    date: ""
  })

  const [errors, setErrors] = useState({});

  const handleChange = event => {
    setNewPhoto({
      ...newPhoto,
      [event.currentTarget.name]: event.currentTarget.value,
    })
  }

  const onSubmit = event => {
    event.preventDefault()
    if (validForSubmission()) {
      props.onSubmit(newPhoto);
      setNewPhoto({
        location: "",
        url: "",
        share: "",
        date: ""
      })
    }
  }

  const validForSubmission = () => {
    let submitErrors = {}
    const requiredFields = ["location", "url", "share", "date"];
    requiredFields.forEach((field) => {
      if (newPhoto[field] === "") {
        if (newPhoto[field].trim() === "") {
          submitErrors = {
            ...submitErrors,
            [field]: "is blank",
          }
        }
      }
    })
    setErrors(submitErrors)
    return _.isEmpty(submitErrors)
  }

  const clearbutton = event => {
    event.preventDefault()
    setNewPhoto({
      location: "",
      url: "",
      share: "",
      date: ""
    })
  }

  return (
    <form className="new-photo-form callout" onSubmit={onSubmit}>
      <ErrorList errors={errors} />

      <label>
        Photo Location:
          <input
          type="text"
          value={newPhoto.location}
          id="location"
          name="location"
          onChange={handleChange}
        />
      </label>

      <label>
        Photo URL:
          <input
          type="text"
          value={newPhoto.url}
          id="url"
          name="url"
          onChange={handleChange}
        />
      </label>

      <label>
        Photo share:
          <input
          type="text"
          value={newPhoto.share}
          id="share"
          name="share"
          onChange={handleChange}
        />
      </label>

      <label>
        Photo share:
          <input
          type="text"
          value={newPhoto.date}
          id="date"
          name="date"
          onChange={handleChange}
        />
      </label>

    </form>

  )
}

export default PhotoFormContainer
