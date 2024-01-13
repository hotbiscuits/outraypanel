import { promises } from 'fs';
import path from 'path';

async function getDirectoryTree(dirPath) {
  const entries = await promises.readdir(dirPath, { withFileTypes: true });
  const result = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(dirPath, entry.name);
      if (entry.isDirectory()) {
        return { name: entry.name, type: "directory", children: await getDirectoryTree(fullPath) };
      } else {
        return { name: entry.name, type: "file" };
      }
    })
  );
  return result;
}
async function GET(req, res) {
  try {
    const tree = await getDirectoryTree(process.cwd());
    res.end(JSON.stringify(tree));
  } catch (error) {
    res.statusCode = 500;
    res.end(JSON.stringify({ error: "Failed to read directory" }));
  }
}

export { GET };
//# sourceMappingURL=_server.ts-842OgA4c.js.map
