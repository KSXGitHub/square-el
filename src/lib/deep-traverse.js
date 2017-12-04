'use strict'

function map (tree, fn) {
  return tree instanceof Array
    ? tree.map(x => map(x, fn))
    : fn(tree)
}

module.exports = {map}
