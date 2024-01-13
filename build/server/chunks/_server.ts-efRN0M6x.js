import fs from 'fs';
import path from 'path';

const BASE_URL = "https://outraypanel-production.up.railway.app/";
const FLASK_URL = "https://pdfparser-production.up.railway.app";
async function saveFile(file, uploadDir) {
  const fileName = Math.floor(1e3 + Math.random() * 9e3) + ".pdf";
  const filePath = path.join(uploadDir, fileName);
  console.log("Preparing to save file at:", filePath);
  if (!fs.existsSync(uploadDir)) {
    console.log("Creating upload directory:", uploadDir);
    fs.mkdirSync(uploadDir, { recursive: true });
  }
  const buffer = Buffer.from(await file.arrayBuffer());
  await fs.promises.writeFile(filePath, buffer);
  try {
    const buffer2 = Buffer.from(await file.arrayBuffer());
    await fs.promises.writeFile(filePath, buffer2);
    console.log("File saved:", filePath);
    if (fs.existsSync(filePath) && fs.statSync(filePath).size > 0) {
      console.log("File verification successful:", filePath);
      return fileName;
    } else {
      console.error("File verification failed:", filePath);
      return "null";
    }
  } catch (error) {
    console.error("Error saving file:", error);
    return "null";
  }
  return fileName;
}
const POST = async ({ request }) => {
  try {
    console.log("Received file upload request");
    const data = await request.formData();
    const file = data.get("file");
    if (!(file instanceof File)) {
      console.error("Uploaded data is not a file");
      throw new Error("Uploaded data is not a file");
    }
    if (file.type !== "application/pdf") {
      console.error("File type is not PDF");
      return new Response(JSON.stringify({ error: "Only PDF files are allowed" }), { status: 400 });
    }
    const uploadDir = "static/";
    const savedFileName = await saveFile(file, uploadDir);
    console.log("File saved:", savedFileName);
    const publicPath = `/${savedFileName}`;
    const fullPath = `${BASE_URL}/${publicPath}`;
    const normalizedFullPath = fullPath.replace(/([^:]\/)\/+/g, "$1");
    console.log("Making API call to Flask with path:", normalizedFullPath);
    console.log(`${FLASK_URL}/flaskin/`);
    const response = await fetch(`${FLASK_URL}/flaskin/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ filePath: normalizedFullPath })
    });
    if (!response.ok) {
      console.error("Flask API call failed");
      throw new Error("Error processing file");
    }
    console.log("File processing by Flask API successful");
    fs.unlinkSync(path.join(uploadDir, savedFileName));
    console.log("File deleted from SvelteKit server:", savedFileName);
    return new Response(JSON.stringify({ fullPath }), { status: 200 });
  } catch (error) {
    console.error("Error in file processing:", error);
    return new Response(
      JSON.stringify({ error: "Error processing file", details: error.message }),
      { status: 500 }
    );
  }
};

export { POST };
//# sourceMappingURL=_server.ts-efRN0M6x.js.map
