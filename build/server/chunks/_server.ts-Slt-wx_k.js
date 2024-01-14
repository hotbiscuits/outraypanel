let latestData = null;
let latestCountAccurate = null;
const POST = async ({ request }) => {
  try {
    const jsonBody = await request.json();
    if (!jsonBody) {
      return new Response(JSON.stringify({ error: "Empty request body" }), { status: 400 });
    }
    latestData = jsonBody.data;
    latestCountAccurate = jsonBody.countaccurate;
    return new Response(JSON.stringify({ message: "Data received successfully" }), { status: 200 });
  } catch (error) {
    console.error("Error receiving data from Flask:", error);
    return new Response(
      JSON.stringify({ error: "Error processing received data", details: error.message }),
      { status: 500 }
    );
  }
};
const GET = async () => {
  const responseData = latestData;
  const responseCountAccurate = latestCountAccurate;
  latestData = null;
  latestCountAccurate = null;
  return new Response(
    JSON.stringify({ data: responseData, countaccurate: responseCountAccurate }),
    { status: 200 }
  );
};

export { GET, POST };
//# sourceMappingURL=_server.ts-Slt-wx_k.js.map
