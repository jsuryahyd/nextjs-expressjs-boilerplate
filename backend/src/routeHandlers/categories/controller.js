/**
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
function addCategory(req, res) {
  return res.json({ success: true, data: 2 });
}

module.exports = {
  addCategory
};
