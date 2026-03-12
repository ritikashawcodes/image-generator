export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { text } = req.body;

  const response = await fetch("https://api.edenai.run/v2/image/generation", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
    },
    body: JSON.stringify({
      show_original_response: false,
      fallback_providers: "",
      providers: "openai",
      text: text,
      resolution: "1024x1024",
      num_images: 1,
    }),
  });

  const data = await response.json();
  res.status(200).json(data);
}
