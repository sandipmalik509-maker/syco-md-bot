
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
    command: ".menu",
    status: "ONLINE",
    categories: [
      {
        name: "GROUP MANAGEMENT",
        commands: [
          ".kick", ".add", ".promote",
          ".demote", ".mute", ".unmute",
          ".tagall", ".groupinfo"
        ]
      },
      {
        name: "SECURITY",
        commands: [
          ".antilink", ".antispam",
          ".welcome", ".goodbye"
        ]
      },
      {
        name: "FUN & GAMES",
        commands: [
          ".joke", ".fact", ".quiz",
          ".riddle", ".roll"
        ]
      },
      {
        name: "BOT OWNER",
        commands: [
          ".ping", ".menu", ".owner",
          ".status"
        ]
      }
    ]
  });
};
