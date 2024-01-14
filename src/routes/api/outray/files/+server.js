// src/routes/files/+server.js

import fs from 'fs';
import path from 'path';

export async function GET({ params }) {
	const { filename } = params;
	const filePath = path.join('uploads', filename); // Serving from 'uploads' directory

	try {
		const fileContents = fs.readFileSync(filePath);
		const contentType = determineContentType(filename);

		return new Response(fileContents, {
			status: 200,
			headers: { 'Content-Type': contentType }
		});
	} catch (error) {
		return new Response('File not found', { status: 404 });
	}
}

function determineContentType(filename) {
	const extension = path.extname(filename).toLowerCase();
	switch (extension) {
		case '.pdf':
			return 'application/pdf';
		case '.png':
			return 'image/png';
		case '.jpg':
		case '.jpeg':
			return 'image/jpeg';
		default:
			return 'application/octet-stream';
	}
}
