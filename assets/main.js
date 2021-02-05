function reverse (string) {
    if(string.length - 1 !== 0 ) {

        return reverse(string.slice(1)) + string[0]
    } 
    return string
}
console.log(reverse('hello guys'))


function searchBinary (arr, finding, left, right) {
   
    if (left <= right) {
        
        let middle = Math.floor((left + right) / 2);

            if (arr[middle] > finding) {

                return searchBinary(arr, finding, left, middle - 1)
            }
            else if (arr[middle] < finding) {

             return searchBinary(arr, finding, middle + 1, right)
            }

            return true;
    } else {

        return false ;
    }
}
let arr = [1, 2, 3, 4, 5, 6, 7,8,9,10,11,12,13,14,15]
console.log(searchBinary(arr, 15, 0, arr.length - 1));