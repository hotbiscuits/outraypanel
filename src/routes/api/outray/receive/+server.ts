// File: src/routes/api/outray/receive.ts
import type { RequestHandler } from '@sveltejs/kit';

// In-memory stores for the received data and count accuracy flag
let latestData = null;
let latestCountAccurate = null; // Separate variable to store the count accuracy flag

export const POST: RequestHandler = async ({ request }) => {
	try {
		const jsonBody = await request.json(); // Directly read the JSON body of the request

		if (!jsonBody) {
			return new Response(JSON.stringify({ error: 'Empty request body' }), { status: 400 });
		}

		// Store the received data and count accuracy flag separately
		latestData = jsonBody.data;
		latestCountAccurate = jsonBody.countaccurate;

		return new Response(JSON.stringify({ message: 'Data received successfully' }), { status: 200 });
	} catch (error) {
		console.error('Error receiving data from Flask:', error);
		return new Response(
			JSON.stringify({ error: 'Error processing received data', details: error.message }),
			{ status: 500 }
		);
	}
};

export const GET: RequestHandler = async () => {
	// Return the latest data and count accuracy flag
	const responseData = latestData;
	const responseCountAccurate = latestCountAccurate;

	// Clear the in-memory stores after they have been sent
	latestData = null;
	latestCountAccurate = null;

	// Respond with both latestData and latestCountAccurate
	return new Response(
		JSON.stringify({ data: responseData, countaccurate: responseCountAccurate }),
		{ status: 200 }
	);
};
