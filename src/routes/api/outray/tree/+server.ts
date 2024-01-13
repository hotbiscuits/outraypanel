import { promises as fs } from 'fs';
import path from 'path';

async function getDirectoryTree(dirPath) {
	const entries = await fs.readdir(dirPath, { withFileTypes: true });
	const result = await Promise.all(
		entries.map(async (entry) => {
			const fullPath = path.join(dirPath, entry.name);
			if (entry.isDirectory()) {
				return { name: entry.name, type: 'directory', children: await getDirectoryTree(fullPath) };
			} else {
				return { name: entry.name, type: 'file' };
			}
		})
	);
	return result;
}

export async function GET(req, res) {
	try {
		const tree = await getDirectoryTree('path/to/your/directory');
		res.end(JSON.stringify(tree));
	} catch (error) {
		res.statusCode = 500;
		res.end(JSON.stringify({ error: 'Failed to read directory' }));
	}
}
