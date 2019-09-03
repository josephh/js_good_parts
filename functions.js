"use strict"; /** Exported modules are in strict mode whether you declare them
                * as such or not.
                */


let obj = {
    i: 0
}
obj.add = function (n) {
  this.i = this.i + n;

  // inner function
  function multiply2Numbers(y) {
    return this.i * y; /** 2. function invocation. 'this' is unfortunately bound
                        * to the global object, rather than the surrounding
                        * function - "TypeError: Cannot read property 'i' of
                        * undefined"
                        */

    // convention is to assign var that=this and reference 'that' instead
  }
  try {
    console.log(multiply2Numbers(4))
  } catch (err) {
    console.log('Uh-oh !')
    console.error(err)
  }

  return this.i;
}

console.log(`add 4 ( ${obj.add(4)}`) /** 1. method invocation */
console.log(`add 4 more ( ${obj.add(4)} )`)
console.log(`add 4 more ( ${obj.add(4)} )`)

/** 3. Constructor invocation.
  * if a function is invoked with 'new', then a new object will be created with
  * a hidden link to the value of the function's prototype member variable, and
  * 'this' will be bound to that new object.
  */
// constructor function for newing-up objects: with a status property
var Quo = function(str) { /** Constructors are capitalised by convention.
                            * 'Bad things' can happen with constructor Functions
                            * are used without the 'new' keyword. So avoid!  
                            */
  this.status = str;
}
// all instances of Quo should get a 'get_status' public method
Quo.prototype.get_status = function() {
  return this.get_status;
}
/** use the 'new' keyword to create a new object with a link to the '.prototype'
  * member and 'this' bound to that new object
  */
var myQuo = new Quo("dazed");
console.log(`what is new myQuo status? ${myQuo.get_status} )`)
