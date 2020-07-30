document.addEventListener('DOMContentLoaded', function(){
    /**custom bind *
     * const sum = (a, b) => a+b
     * const plusTen = sum.bind2(undefined, 10)
     * plusTen(1)
     * plusTen(10)
     * 
     *
     */

     const sum = (a,b) => a + b;

     Function.prototype.bind2 = function(context, ...args) {
         return (...args2) => {
             return this.apply(context, args.concat(args2))
         }
     }

     const plusTen = sum.bind2(undefined, 10)

     //console.log(plusTen(10))

})