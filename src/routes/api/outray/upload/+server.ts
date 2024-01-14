import type { RequestHandler } from '@sveltejs/kit';
import fs from 'fs';
import path from 'path';
// @ts-ignore
import { BASE_URL } from '$lib/config'; // Import BASE_URL from your configuration
// @ts-ignore
import { FLASK_URL } from '$lib/config'; // Import BASE_URL from your configuration
import fetch from 'node-fetch'; // Make sure to install node-fetch if not already installed

export const POST: RequestHandler = async ({ request }) => {
	try {
		console.log('Received file upload request');

		const data = await request.formData();
		console.log('Form data received:', data);

		const file = data.get('file');
		if (!file || typeof file === 'string') {
			console.log('No file or file is of incorrect type:', file);
			return new Response('No file uploaded', { status: 400 });
		}
		console.log('File received:', file.name);

		// Forward the file to Flask backend
		const flaskEndpoint = FLASK_URL;
		console.log('Forwarding to Flask backend:', flaskEndpoint);

		const formData = new FormData();
		formData.append('file', file);

		const response = await fetch(flaskEndpoint, {
			method: 'POST',
			body: formData
		});
		console.log('Received response from Flask backend:', response);

		const backendResponse = await response.json();
		console.log('Flask backend response:', backendResponse);

		return new Response(JSON.stringify(backendResponse), { status: response.status });
	} catch (error) {
		console.error('Error handling file upload:', error);
		return new Response('Internal Server Error', { status: 500 });
	}
};
