module.exports = (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed"
    });
  }

  const command = String(req.body?.command || "")
    .trim()
    .toLowerCase();

  if (command === ".ping") {
    return res.status(200).json({
      success: true,
      bot: "SYCO MD BOT",
      reply: "🟢 PONG!\n⚡ Bot: SYCO MD BOT\n📡 Status: ONLINE\n👑 Owner: SYCO"
    });
  }

  return res.status(200).json({
    success: true,
    reply: "Command not found. Type .menu"
  });
};
