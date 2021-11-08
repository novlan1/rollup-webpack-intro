const { keys } = Object;

const hasOwnProp = Object.prototype.hasOwnProperty;

function has(obj, prop) {
  return hasOwnProp.call(obj, prop);
}

module.exports = {
  keys,
  hasOwnProp,
  has,
};
