import { promises } from 'fs';
import path from 'path';

async function getDirectoryTree(dirPath) {
  const entries = await promises.readdir(dirPath, { withFileTypes: true });
  const result = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(dirPath, entry.name);
      const stats = await promises.stat(fullPath);
      const permissions = `0${(stats.mode & 511).toString(8)}`;
      if (entry.isDirectory()) {
        return {
          name: entry.name,
          type: "directory",
          permissions,
          children: await getDirectoryTree(fullPath)
        };
      } else {
        return {
          name: entry.name,
          type: "file",
          permissions
        };
      }
    })
  );
  return result;
}
async function GET() {
  try {
    const tree = await getDirectoryTree(process.cwd());
    return new Response(JSON.stringify(tree), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to read directory" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
}

export { GET };
//# sourceMappingURL=_server.ts-2WHCnEHB.js.map
