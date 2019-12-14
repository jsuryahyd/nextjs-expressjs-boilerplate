//log
const log4js = require("log4js");
const path = require("path");
log4js.configure({
  appenders: {
    errors: {
      type: "dateFile",
      filename: path.join(__dirname, "../logs", "errors.log")
    }
  },
  categories: {
    default: { appenders: ["errors"], level: "error" }
  }
});

module.exports.errorLog = log4js.getLogger();
