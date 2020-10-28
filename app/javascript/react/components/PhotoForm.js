import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import _ from 'lodash';
import PhotoFormContainer from '../containers/PhotoFormContainer';

const AddNewPhoto = (formPayload) => {
	const [photo, setPhoto] = useState([]);

	fetch('api/v1/photos', {
		method: 'POST',
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
			setPhoto([...photo, body]);
		})
		.catch((error) => console.error(`Error in fetch: ${error.message}`));

	return (
		<div>
			<h1>Photo Form</h1>
			<PhotoFormContainer onSubmit={AddNewPhoto} />
		</div>
	);
};
