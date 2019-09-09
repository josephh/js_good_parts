"use strict"; /** Exported modules are in strict mode whether you declare them
                * as such or not.
                */

/**
 * Towers of hanoi.  Get all pieces from the 'source' tower to the 'target'
 * tower, using a third ('auxiliary') tower. Only one piece can be moved at a
 * time and a larger piece may not be placed on top of a smaller piece.
 * Javascript does not have 'tail recursion' - which is a programming language
 * optimisation strategy that replaces recursive functions with a loop (and so
 * avoiding recursive programs that use up so many 'stack frames' they run out
 * of memory).
 **/

// break the puzzle into 3 chunks of work:
function hanoi(piece, src, aux, dest) {
  // (1) uncover the bottom piece by moving the substack to the aux post
  // (2) move the bottom disc to the destination post
  // (3) move the substack to the auxiliary post
  if(piece > 0) { /* terminal condition */
    hanoi(piece - 1, src, dest, aux)
    console.log(`move piece ${piece} from ${src} to ${dest}`)
    hanoi(piece - 1, aux, src, dest)
  }
}

hanoi(3, 'source post', 'auxiliary post', 'destination post');
