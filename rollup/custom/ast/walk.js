let shouldSkip;
let shouldAbort;
// 对 AST 的节点调用 enter() 和 leave() 函数，如果有子节点将递归调用
function walk(ast, { enter, leave }) {
  shouldAbort = false;
  visit(ast, null, enter, leave);
}

const context = {
  skip: () => shouldSkip = true,
  abort: () => shouldAbort = true,
};

const childKeys = {};

const { toString } = Object.prototype;

function isArray(thing) {
  return toString.call(thing) === '[object Array]';
}

function visit(node, parent, enter, leave) {
  if (!node || shouldAbort) return;

  if (enter) {
    shouldSkip = false;
    enter.call(context, node, parent);
    if (shouldSkip || shouldAbort) return;
  }

  const keys = childKeys[node.type] || (
    childKeys[node.type] = Object.keys(node).filter((key) => typeof node[key] === 'object')
  );

  let key; let value; let i; let
    j;

  i = keys.length;
  while (i--) {
    key = keys[i];
    value = node[key];

    if (isArray(value)) {
      j = value.length;
      while (j--) {
        visit(value[j], node, enter, leave);
      }
    } else if (value && value.type) {
      visit(value, node, enter, leave);
    }
  }

  if (leave && !shouldAbort) {
    leave(node, parent);
  }
}

module.exports = walk;
