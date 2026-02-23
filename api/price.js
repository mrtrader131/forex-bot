export default async function handler(req, res) {
  const API_KEY = "275ef6d202-8c3ae13696-taure7";
  const { from, to } = req.query;

  const response = await fetch(
    https://api.fastforex.io/fetch-one?from=${from}&to=${to},
    {
      headers: { "X-API-Key": API_KEY }
    }
  );

  const data = await response.json();
  res.status(200).json(data);
}
