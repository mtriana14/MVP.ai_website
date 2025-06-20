export async function POST(): Promise<Response> {
  return new Response(JSON.stringify({ message: "API Route Working!" }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
