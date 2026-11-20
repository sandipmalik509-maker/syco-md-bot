module.exports = (req, res) => {
  if (req.method !== "GET") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed"
    });
  }

  return res.status(200).json({
    success: true,
    bot: "SYCO MD BOT",
    command: ".ping",
    status: "ONLINE",
    message: "Pong! SYCO MD BOT is working."
  });
};
