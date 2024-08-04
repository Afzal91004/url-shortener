const shortid = require("shortid");
const URL = require("../models/url");

async function handleGenerateNewShortUrl(req, res) {
  const body = req.body;
  if (!body.url) return res.status(400).json({ error: "url is required" });

  const existingUrl = await URL.findOne({ redirectUrl: body.url });
  if (existingUrl) {
    return res.json({ id: existingUrl.shortId });
  }

  const shortId = shortid.generate();
  try {
    await URL.create({
      shortId: shortId,
      redirectUrl: body.url,
      visitHistory: [],
    });
    return res.json({ id: shortId });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error creating URL" });
  }
}

async function handleGetAnalytics(req, res) {
  const shortId = req.params.shortId;
  const result = await URL.findOne({ shortId });
  return res.json({
    totalClicks: result.visitHistory.length,
    analytics: result.visitHistory,
  });
}

module.exports = {
  handleGenerateNewShortUrl,
  handleGetAnalytics,
};
