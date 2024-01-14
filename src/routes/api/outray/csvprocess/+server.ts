import Papa from 'papaparse';

function processData(originalData, date) {
	console.log(originalData);
	console.log(date);
	// New headings from your CSV format
	const newHeadings = [
		'manifest_reference',
		'consignment_reference',
		'pickup_name',
		'pickup_street',
		'pickup_suburb',
		'pickup_postcode',
		'pickup_state',
		'pickup_telephone',
		'consignment_value',
		'delivery_name',
		'delivery_street',
		'delivery_suburb',
		'delivery_postcode',
		'delivery_state',
		'delivery_telephone',
		'cod',
		'special_instructions',
		'type',
		'required_delivery_date',
		'item_code',
		'description',
		'qty_item',
		'pal_item',
		'cubic_item',
		'weight_item',
		'space_item',
		'length_item',
		'width_item',
		'height_item',
		'Service Type'
	];

	const originalToNewHeadingsMap = {
		Consignment: 'consignment_reference',
		'Venue name': 'delivery_name',
		Address: 'delivery_street',
		Suburb: 'delivery_suburb',
		State: 'delivery_state',
		Postcode: 'delivery_postcode',
		Phone: 'delivery_telephone',
		Instructions: 'special_instructions',
		Type: 'type',
		Weight: 'weight_item',
		Items: 'qty_item' // Assuming 'Items' maps to 'qty_item'
		// ... add other mappings if necessary
	};

	// Process data
	let processedData = originalData.slice(1).map((row) => {
		let newRow = new Array(newHeadings.length).fill('');

		Object.entries(originalToNewHeadingsMap).forEach(([oldHeading, newHeading]) => {
			const originalIndex = originalData[0].indexOf(oldHeading);
			if (originalIndex !== -1) {
				const newHeadingIndex = newHeadings.indexOf(newHeading);
				newRow[newHeadingIndex] = row[originalIndex];
			}
		});

		// Handle static values and date
		newRow[newHeadings.indexOf('pickup_name')] = 'Outrayjus Warehousing and Distribution';
		newRow[newHeadings.indexOf('pickup_street')] = '33 Riverside Place';
		newRow[newHeadings.indexOf('pickup_suburb')] = 'Morningside';
		newRow[newHeadings.indexOf('pickup_state')] = 'QLD';
		newRow[newHeadings.indexOf('pickup_postcode')] = '4170';
		newRow[newHeadings.indexOf('required_delivery_date')] = date;
		newRow[newHeadings.indexOf('item_code')] = 'CAR';
		newRow[newHeadings.indexOf('description')] = 'carton';
		newRow[newHeadings.indexOf('Service Type')] =
			row[originalData[0].indexOf('Type')] === 'Pickup' ? 'Pick up - next day' : 'General';

		// Assuming 'qty_item' refers to the 'Items' in the original data
		newRow[newHeadings.indexOf('qty_item')] = row[originalData[0].indexOf('Items')];

		return newRow;
	});

	// Return the new data, including the headings
	return [newHeadings, ...processedData];
}

export async function POST({ request }) {
	try {
		const requestBody = await request.json();
		const { tableData, dateString } = requestBody;
		const processedData = processData(tableData, dateString);
		const csv = Papa.unparse(processedData);

		// Convert CSV string to ReadableStream
		const bodyStream = new ReadableStream({
			start(controller) {
				controller.enqueue(new TextEncoder().encode(csv));
				controller.close();
			}
		});

		// Create and populate Headers object
		const headers = new Headers();
		headers.append('Content-Type', 'text/csv');
		headers.append('Content-Disposition', 'attachment; filename="processed_data.csv"');

		// Return a Response object
		return new Response(bodyStream, {
			status: 200, // OK status
			headers: headers
		});
	} catch (error) {
		console.error('Error processing request:', error);
		return new Response('Internal Server Error: ' + error.message, {
			status: 500,
			headers: new Headers({ 'Content-Type': 'text/plain' })
		});
	}
}
