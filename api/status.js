
module.exports = (req, res) => {
  res.status(200).json({
    success: true,
    bot: "SYCO MD BOT",
    version: "1.0.0",
    backend: "ONLINE",
    whatsapp: "NOT_CONNECTED",
    message: "SYCO Backend is working!"
  });
};
