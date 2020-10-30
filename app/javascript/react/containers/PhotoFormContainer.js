import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import ErrorList from '../components/ErrorList';
import { Redirect } from 'react-router-dom';

const PhotoFormContainer = (props) => {
	const [newPhoto, setNewPhoto] = useState({
		location: '',
		url: '',
		share: '',
		date: '',
	});

	const [errors, setErrors] = useState({});

	const validForSubmission = () => {
		let submitErrors = {};
		const requiredFields = ['location', 'url', 'share', 'date'];
		requiredFields.forEach((field) => {
			if (newPhoto[field].trim() === '') {
				submitErrors = {
					...submitErrors,
					[field]: 'is blank',
				};
			}
		});
		setErrors(submitErrors);
		return _.isEmpty(submitErrors);
	};

	const [shouldRedirect, setShouldRedirect] = useState(false);

	const handleInputChange = (event) => {
		setNewPhoto({
			...newPhoto,
			[event.currentTarget.name]: event.currentTarget.value,
		});
	};

	const onSubmitHandler = (event) => {
		event.preventDefault();
		if (validForSubmission()) {
			addNewPhoto(newPhoto);
		}
	};

	const clearbutton = (event) => {
		event.preventDefault();
		setNewPhoto({
			location: '',
			url: '',
			share: '',
			date: '',
		});
	};

	const addNewPhoto = (formPayload) => {
		fetch('/api/v1/photos', {
			method: 'POST',
			credentials: 'same-origin',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(formPayload),
		})
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
				setShouldRedirect(true);
			})
			.catch((error) => console.error(`Error in fetch: ${error.message}`));
	};

	if (shouldRedirect) {
		return <Redirect to="/" />;
	}

	return (
		<div>
			<h1>Add A New Photo</h1>
			<form onSubmit={onSubmitHandler}>
				<ErrorList errors={errors} />

				<label htmlFor ="location">
					<input
						type="text"
						value={newPhoto.location}
						id="location"
						name="location"
            onChange={handleInputChange}
            placeholder="Location"
					/>
				</label>

				<label htmlFor="url">
          <input type="text" 
            value={newPhoto.url} 
            id="url" 
            name="url" 
            onChange={handleInputChange} 
            placeholder="URL"/>
				</label>

				<label htmlFor='share'>
          <input type="text" 
            value={newPhoto.share} 
            id="share" 
            name="share" 
            onChange={handleInputChange} 
            placeholder="Share?"/>
				</label>

				<label htmlFor="date">
          <input type="text" 
            value={newPhoto.date} 
            id="date" 
            name="date" 
            onChange={handleInputChange} 
            placeholder="Date"/>
				</label>

				<div className="button-group">
					<input className="button" type="submit" value="Submit" />
					<input className="button" type="clear" value="Clear" />
				</div>
			</form>
		</div>
	);
};

export default PhotoFormContainer;
