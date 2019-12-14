const {
  parseAndCheckFieldsRequired_GET,
  parseAndCheckFieldsRequired_POST
} = require("./middleware/formMiddleware");
const { loginAdmin } =  require("./routeHandlers/auth/controller");

const router = require("express").Router();
const cors = require("cors");

const { addCategory } = require("./routeHandlers/categories/controller");

router.use(cors());

/**
 * auth
 */
router.post(
  "/login/admin",
  parseAndCheckFieldsRequired_GET(["email", "password"]),
  loginAdmin
);

/**
 * categories
 */
router.post(
  "/categories/add",
  parseAndCheckFieldsRequired_POST(["categories"]),
  addCategory
);
router.get("/categories/all", parseAndCheckFieldsRequired_GET([]), (req, res) =>
  res.json({ data: [{}, {}] })
);

module.exports = router;
