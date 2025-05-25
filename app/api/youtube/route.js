export async function GET(req) {
  try {
    const apiKey = process.env.YOUTUBE_API_KEY;
    const baseUrl = process.env.YOUTUBE_API_BASE_URL;

    if (!apiKey || !baseUrl) {
      return new Response(JSON.stringify({ error: "API key or Base URL missing" }), { status: 500 });
    }

    const category = req.nextUrl.searchParams.get("category") || ""; // default kosong jika tidak ada
    const region = req.nextUrl.searchParams.get("region") || "ID"; // default Indonesia

    const url = `${baseUrl}?part=snippet,statistics&chart=mostPopular&regionCode=${region}&maxResults=10&videoCategoryId=${category}&key=${apiKey}`;

    const res = await fetch(url);
    if (!res.ok) {
      return new Response(JSON.stringify({ error: "Failed to fetch from YouTube API" }), { status: res.status });
    }

    const ytData = await res.json();

    const formatted = ytData.items.map((item) => ({
      title: item.snippet.title,
      channel: item.snippet.channelTitle,
      views: item.statistics.viewCount,
      uploaded: new Date(item.snippet.publishedAt).toLocaleDateString("id-ID"),
      categoryId: category,
      videoId: item.id,
      thumbnail: item.snippet.thumbnails.medium.url,
    }));

    return new Response(JSON.stringify(formatted), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message || "Unknown error" }), { status: 500 });
  }
}
