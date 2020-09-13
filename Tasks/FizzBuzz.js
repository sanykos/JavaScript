    // Solutuin #1
    /*for(let i = 1; i <= 100; i++) {
        if( i % 3 === 0 && i % 5 == 0 ) {
            console.log('FizzBazz')
        }else if( i % 3 === 0 ) {
            console.log('Fizz')
        }else if(i % 5 === 0){
            console.log('FizzBazz')
        }
    }*/

    // Solution #2
    /*function isFizzBuzz(n) {
        if(n % 3 === 0 && n % 5 === 0) {
            return true
        }
        return false
    }

    function isFizz(n) {
        if(n % 3 === 0) {
            return true
        }
        return false
    }

    function isBuzz(n) {
        if(n % 5 === 0) {
            return true
        }
        return false
    }

    for(let i = 1; i <= 100; i++) {
        switch(true) {
            case isFizzBuzz(i):
                console.log('FizzBuzz')
            break;
            case isFizz(i):
                console.log('Fizz')
            break;
            case isBuzz(i):
                console.log('Buzz')
            break;
            default:
                console.log(i)
        }
    }*/

    // Solution #3
    const gen = (n,w) => (num) => num % n === 0 ? w : ''

    const fizz = (3, 'Fizz')
    const buzz = (5, 'Buzz')

    const result = [...Array(100).keys()].map(i => i + 1).forEach(i => fizz(i) + buzz(i) || i)
    //console.log(result)
