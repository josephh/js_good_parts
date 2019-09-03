"use strict"; /** Exported modules are in strict mode whether you declare them
                * as such or not.
                */

/** method invocation */
let O = {
    i: 0
}

O.add = function (n) {
  this.i = this.i + n;
  return this.i;
}

/**

module.exports = O;
