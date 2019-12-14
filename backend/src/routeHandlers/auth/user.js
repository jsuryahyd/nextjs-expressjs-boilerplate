/**
 *
 * @param {Object} values
 * @param {string} values.name
 * @param {string} values.email
 * @param {string} [values.pwd]
 * @param {number[]} values.roles
 */
exports.User = ({ name, email, pwd, roles }) => {
  return {
    name,
    pwd,
    roles,
    email
  };
};
