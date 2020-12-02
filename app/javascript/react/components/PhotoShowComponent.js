import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import { Redirect } from 'react-router-dom';



const PhotoShowComponent = (props) => {
	const [photo, setPhoto] = useState({
		location: '',
		url: '',
		share: '',
		date: '',
	});

	useEffect(() => {
		let photoId = props.props.match.params.id;
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
				setPhoto(body);
			})
			.catch((error) => console.error(`Error in fetch: ${error.message}`));
	}, []);

	return (
		<div>
			<img src={photo.url} />
			<p>{photo.location}</p>
			<p>{photo.date}</p>
		</div>
	);
};

export default PhotoShowComponent;
