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
  return this.status;
}
/** use the 'new' keyword to create a new object with    a link to the '.prototype'
  * member and 'this' bound to that new object
  */
var myQuo = new Quo("dazed");
console.log(`what is new myQuo status? ${myQuo.get_status()} )`);

/** 4. 'apply' invocation, allows for
  * (i) specifying the value of 'this' and
  * (ii) providing an array of arguments
  */
var arr = [3, 4, 7, 4];
const reducer = (acc, current) => {
  return acc + current;
}
function addNumbers(arr) {
  console.log(`what is arr? ${arr}` )
  return arr.reduce(reducer)
}

let r = addNumbers.apply(null, [arr]); // this is null
console.log(r)

// apply allows functions that are methods of other functions to be applied...
let newObj = {
  status: 'i am new!'
}

let newObjStatus = Quo.prototype.get_status.apply(newObj)
console.log(`newObjStatus is: ${newObjStatus}` )
