"use strict"; /** Exported modules are in strict mode whether you declare them
                * as such or not.
                */

/**
 * Towers of hanoi.  Get all pieces from the 'source' tower to the 'target'
 * tower, using a third ('auxiliary') tower. Only one piece can be moved at a
 * time and a larger piece may not be placed on top of a smaller piece.
 *
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

/**
 * A function that returns the result of invoking itself recursively is said to
 * be tail recursive.   Tail recursive programs are in danger of using up so many
 * stack frames that they run out of memory).
 * unfortunately Javascript does not have 'tail recursion optimisation'.
 */
 var factorial = function factorial(i, tally) {
   tally = tally || 1 // initialisation the tally to 1
   if(i < 2) {
     return tally;
   }
   return factorial(i - 1, tally * i);
 }

console.log(factorial(6));
