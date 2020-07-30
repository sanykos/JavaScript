document.addEventListener('DOMContentLoaded' ,function(){
/** sum(1)(2) */

    function sum(a, b) {
        if(b) {
            return a + b;
        }
        return function(c) {
            return a + c;
        }
    }

    console.log(sum(1)(2))

})