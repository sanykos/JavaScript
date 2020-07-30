document.addEventListener('DOMContentLoaded', function() {
    
    function binarySearch(arr, target) {
        let start = 0;
        let end = arr.length - 1;

        while(start <= end) {
            let middle = Math.floor((start + end) / 2)
            if(target === arr[middle]) {
                console.log(target)
            }

            if(target > arr[middle]) {
                start = middle + 1
            }

            if(target < arr[middle]) {
                end = middle - 1
            }
        }
    }
    
})