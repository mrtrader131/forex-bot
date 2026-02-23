export default async function handler(req, res) {
  try {
    const API_KEY = "তোমার_API_KEY_এখানে";49675354f4-29d44dd6b1-taurjk
    const { from, to } = req.query;

    const response = await fetch(
      https://api.fastforex.io/fetch-one?from=${from}&to=${to},
      {
        headers: {
          "X-API-Key": API_KEY
        }
      }
    );

    const data = await response.json();
    res.status(200).json(data);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
