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

export async function GET() {
	try {
		const tree = await getDirectoryTree(process.cwd());
		return new Response(JSON.stringify(tree), {
			status: 200,
			headers: {
				'Content-Type': 'application/json'
			}
		});
	} catch (error) {
		return new Response(JSON.stringify({ error: 'Failed to read directory' }), {
			status: 500,
			headers: {
				'Content-Type': 'application/json'
			}
		});
	}
}
