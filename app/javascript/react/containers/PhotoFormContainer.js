import React, { useState, useEffect, useCallback } from 'react';
import _ from 'lodash';
import ErrorList from '../components/ErrorList';
import { Redirect } from 'react-router-dom';
import {useDropzone} from 'react-dropzone'

const PhotoFormContainer = (props) => {
	const [newPhoto, setNewPhoto] = useState({
		name: '',
		location: '',
		camera: '',
		url: '',
		shared: '',
		date: '',
		description: ''
	});

	const [errors, setErrors] = useState({});

	const validForSubmission = () => {
		let submitErrors = {};
		const requiredFields = ['location', 'url', 'shared', 'date'];
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
			name: '',
			location: '',
			camera: '',
			url: '',
			shared: '',
			date: '',
			description: ''
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

				<label htmlFor ="name">
					<input
						type="text"
						value={newPhoto.name}
						id="name"
						name="name"
            onChange={handleInputChange}
            placeholder="Name"
					/>
				</label>

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

				<label htmlFor ="camera">
					<input
						type="text"
						value={newPhoto.camera}
						id="camera"
						name="camera"
            onChange={handleInputChange}
            placeholder="Camera"
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

				<label htmlFor='shared'>
          <input type="text" 
            value={newPhoto.shared} 
            id="shared" 
            name="shared" 
            onChange={handleInputChange} 
            placeholder="Shared?"/>
				</label>

				<label htmlFor="date">
          <input type="text" 
            value={newPhoto.date} 
            id="date" 
            name="date" 
            onChange={handleInputChange} 
            placeholder="Date"/>
				</label>

				<label htmlFor="description">
				<input type="text" 
					value={newPhoto.description} 
					id="description" 
					name="description" 
					onChange={handleInputChange} 
					placeholder="Description"/>
			</label>

				<div className="button-group">
					<input className="button" type="submit" value="Submit" />
					<input onClick={clearbutton} className="button" type="clear" defaultValue="Clear" />
				</div>
			</form>
		</div>
	);
};

export default PhotoFormContainer;
