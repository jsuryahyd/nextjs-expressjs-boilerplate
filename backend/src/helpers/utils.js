const { inspect: Inspect } = require("util");
const { logerr: errorLog } = require("./logger");

const bcrypt = require("bcryptjs");
const Request = require("request");

class Utils {
  async getHashedPwd(pwd) {
    if (!pwd) {
      errorLog.error("no pwds");
      return null;
    }
    const salt = await bcrypt.genSalt(10).catch(err => errorLog.error(err));
    if (!salt) {
      return null;
    }
    const hash = await bcrypt.hash(pwd, salt).catch(err => errorLog.error(err));
    return hash;
  }

  containsSpecialCharacters(str) {
    if (!str) errorLog.error("no string given for special characters check");
    return new RegExp(/[0-9-!$%^&\*\(\)_\+|~=`\{\}\[\]:\/;<>?,.@#]+/g).test(
      str
    );
  }

  isValidTsId(tsId) {
    return new RegExp(/^[0-9]{10}$/).test(tsId);
  }

  /**
   * comparePwd
   */
  async comparePwd(inputPwd, hashedPwdFromDb) {
    if (!inputPwd || !hashedPwdFromDb) {
      errorLog.error("undefined params" + arguments);
    }
    return await bcrypt.compare(inputPwd, hashedPwdFromDb);
  }

  err(message, code) {
    const error = new Error(message);
    return code ? { ...error, code: code.toUpperCase() } : error;
  }

  /**
   * @description pure function
   * @param {number} role
   *
   */
  getRoleString(role) {
    let rolestring = "";
    for (let i in global.userRoles) {
      if (global.userRoles[i] == role) {
        rolestring = this.toCapitalCase(i);
        break;
      }
    }
    return rolestring;
  }

  toCapitalCase(str) {
    return str[0].toUpperCase() + str.substring(1).toLowerCase();
  }

  mapKey(map, value) {
    for (var i in map) {
      if (map[i] === value) {
        return i;
      }
    }
  }

  tokenGenerator(l) {
    if (!l) l = 32;
    let text = "";
    let possible = "abcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < l; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
  }

  otpGenerator(length) {
    length = length || 6;
    let text = "";
    let possible = "0123456789";
    for (let i = 0; i < length; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
  }

  sendMessage(phone, message) {
    return new Promise((resolve, reject) => {
      if (!message) {
        return reject(new Error("Missing data" + Inspect(arguments)));
      }
      process.env.ENV == "DEVELOPMENT"
        ? resolve("6666666")
        : Request.get(
            {
              url: encodeURI(
                `${process.env.SMS_GATEWAY_URL}?User=${process.env.SMS_GATEWAY_USERNAME}&passwd=${process.env.SMS_GATEWAY_PASSWORD}&mobilenumber=${phone}&message=${message}&DR=Y&mtype=LNG`
              ) //type=lng required for non-english characters
            },
            (err, response, body) => {
              if (err) return reject(err);
              if (!body.startsWith("OK:")) {
                return reject(body);
              }
              resolve(body.split("OK:")[1]);
            }
          );
    });
  }
  /**
   * deep objectCompare
   * @link https://gist.github.com/nicbell/6081098
   */
  objectCompare(obj1, obj2) {
    //Loop through properties in object 1
    for (var p in obj1) {
      //Check property exists on both objects
      if (obj1.hasOwnProperty(p) !== obj2.hasOwnProperty(p)) return false;

      switch (typeof obj1[p]) {
        //Deep compare objects
        case "object":
          if (!this.objectCompare(obj1[p], obj2[p])) return false;
          break;
        //Compare function code
        case "function":
          if (
            typeof obj2[p] == "undefined" ||
            (p != "objectCompare" && obj1[p].toString() != obj2[p].toString())
          )
            return false;
          break;
        //Compare values
        default:
          if (obj1[p] != obj2[p]) return false;
      }
    }

    //Check object 2 for any extra properties
    for (var p in obj2) {
      if (typeof obj1[p] == "undefined") return false;
    }
    return true;
  }

  phoneValidationError(val) {
    let err =
      !val ||
      val.length < 6 ||
      val.length > 16 ||
      !new RegExp(/^[0-9]+$/).test(val) //new RegExp(/^[\+-]{0,1}[0-9]+$/)
        ? "Please input valid Phone Number"
        : null;
    return err;
  }

  emailValidationError(email) {
    if (!email) return "Enter Email.";
    let valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);

    if (!valid) return "Enter a valid Email";
    return undefined;
  }
}

module.exports = new Utils();
