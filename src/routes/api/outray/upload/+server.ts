import type { RequestHandler } from '@sveltejs/kit';
import fs from 'fs';
import path from 'path';

async function saveFile(file: File, uploadDir: string): Promise<string> {
	// Generate a unique file name

	const fileName = Math.floor(1000 + Math.random() * 9000) + '.pdf';

	const filePath = path.join(uploadDir, fileName);

	// Ensure the upload directory exists
	fs.mkdirSync(uploadDir, { recursive: true });

	// Convert ArrayBuffer to Buffer
	const buffer = Buffer.from(await file.arrayBuffer());

	// Save the file
	await fs.promises.writeFile(filePath, buffer);

	return fileName;
}
// @ts-ignore
import { BASE_URL } from '$lib/config'; // Import BASE_URL from your configuration
// @ts-ignore
import { FLASK_URL } from '$lib/config'; // Import BASE_URL from your configuration
export const POST: RequestHandler = async ({ request }) => {
	try {
		console.log('Received file upload request');

		const data = await request.formData();
		const file = data.get('file');

		if (!(file instanceof File)) {
			console.error('Uploaded data is not a file');
			throw new Error('Uploaded data is not a file');
		}

		if (file.type !== 'application/pdf') {
			console.error('File type is not PDF');
			return new Response(JSON.stringify({ error: 'Only PDF files are allowed' }), { status: 400 });
		}

		const uploadDir = 'static/uploads';
		const savedFileName = await saveFile(file, uploadDir);
		console.log('File saved:', savedFileName);

		const publicPath = `uploads/${savedFileName}`;
		const fullPath = `${BASE_URL}/${publicPath}`;
		const normalizedFullPath = fullPath.replace(/([^:]\/)\/+/g, '$1');

		console.log('Making API call to Flask with path:', normalizedFullPath);
		console.log(`${FLASK_URL}/flaskin/`);
		const response = await fetch(`${FLASK_URL}flaskin/`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ filePath: normalizedFullPath })
		});

		if (!response.ok) {
			console.error('Flask API call failed');
			throw new Error('Error processing file');
		}

		console.log('File processing by Flask API successful');

		fs.unlinkSync(path.join(uploadDir, savedFileName));
		console.log('File deleted from SvelteKit server:', savedFileName);

		return new Response(JSON.stringify({ fullPath: fullPath }), { status: 200 });
	} catch (error) {
		console.error('Error in file processing:', error);
		return new Response(
			JSON.stringify({ error: 'Error processing file', details: error.message }),
			{ status: 500 }
		);
	}
};
