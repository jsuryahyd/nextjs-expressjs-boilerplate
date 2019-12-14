const { IncomingForm } = require("formidable");
const { errorLog } = require("../helpers/logger");
const { inspect: Inspect } = require("util");
/**
 *
 * @param {Array<string>} fieldsArray
 * @returns {import('express').RequestHandler}
 */
function parseAndCheckFieldsRequired_POST(fieldsArray) {
  return function(req, res, next) {
    const form = new IncomingForm();
    form.parse(req, async (err, fields) => {
      if (err) {
        return res.status(400).send({
          success: false,
          msg: "Bad Request"
        });
      }
      //check requiredFields
      let invalid = false;
      for (var i = 0; i < fieldsArray.length; i++) {
        if (typeof fields[fieldsArray[i]] == "undefined") {
          errorLog.error(
            `missing fields\nrequired = ${Inspect(
              fieldsArray
            )} \n got  = ${Inspect(fields)}`
          );
          invalid = true;
          break;
        }
      }

      if (invalid) {
        return res.status(400).json({
          success: false,
          msg: "Bad Request"
        });
      }

      res.locals.fields = fields;
      next();
    });
  };
}

/**
 *
 * @param {Array<string>} fieldsArray
 * @returns {import('express').RequestHandler}
 */
function parseAndCheckFieldsRequired_GET(fieldsArray) {
  return function(req, res, next) {
    const fields = req.query;
    //check requiredFields
    let invalid = false;
    for (var i = 0; i < fieldsArray.length; i++) {
      if (typeof fields[fieldsArray[i]] == "undefined") {
        errorLog.error(
          `missing fields : required:${Inspect(fieldsArray)} -- got:${Inspect(
            fields
          )}`
        );

        break;
        //instead list out missing fields and send them as response.
      }
    }

    if (invalid) {
      return res.status(400).json({
        success: false,
        msg: "Bad Request"
      });
    }
    res.locals.fields = fields;
    next();
  };
}

module.exports = {
  parseAndCheckFieldsRequired_GET,
  parseAndCheckFieldsRequired_POST
};
