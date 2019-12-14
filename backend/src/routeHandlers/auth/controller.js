const { User } = require("./user");

/**
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
exports.loginAdmin = (req, res) => {
//   return res.status(400).json({
//       success:false,
//       msg:"UnAuthorized"
//   })
  
  res.json({
    success: true,
    data: User({
      name: "surya",
      email: "jaya.surya@tvisha.in",
      roles: [1, 2]
    })
  });
};
