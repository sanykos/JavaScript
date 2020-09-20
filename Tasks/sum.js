/** sum(1)(2) */

/* function sum(a, b) {
        if(b) {
            return a + b;
        }
        return function(c) {
            return a + c;
        }
    }*/

// console.log(sum(1)(2))
/** sum(1)(2)(3)... */
function sum(a) {
  let result = a;
  function f(b) {
    result += b;
    console.log(result);
    return f;
  }
  return f;
}
sum(1)(2)(3);
