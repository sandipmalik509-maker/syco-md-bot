
const fs = require("fs");
const path = require("path");

module.exports = (req, res) => {
  try {
    const filePath = path.join(
      process.cwd(),
      "commands.json"
    );

    const commands = JSON.parse(
      fs.readFileSync(filePath, "utf8")
    );

    res.status(200).json({
      success: true,
      bot: "SYCO MD BOT",
      version: commands.version,
      prefix: commands.prefix,
      categories: commands.categories,
      autoAdmin: commands.autoAdmin,
      message: "Command menu loaded successfully!"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      bot: "SYCO MD BOT",
      message: "Unable to load commands.json"
    });
  }
};
