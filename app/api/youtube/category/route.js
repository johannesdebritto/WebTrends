export async function GET() {
  try {
    const apiKey = process.env.YOUTUBE_API_KEY;
    const baseUrl = process.env.YOUTUBE_API_BASE_URL_CATEGORIES;

    if (!apiKey || !baseUrl) {
      return new Response(JSON.stringify({ error: "API key or Base URL missing" }), { status: 500 });
    }

    const url = `${baseUrl}?part=snippet&regionCode=ID&key=${apiKey}`;

    const res = await fetch(url);
    if (!res.ok) {
      return new Response(JSON.stringify({ error: "Failed to fetch categories" }), { status: res.status });
    }

    const data = await res.json();

    const categories = data.items.map((item) => ({
      id: item.id,
      title: item.snippet.title,
    }));

    return new Response(JSON.stringify(categories), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message || "Unknown error" }), { status: 500 });
  }
}
