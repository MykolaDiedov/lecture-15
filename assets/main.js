function revers (string) {
    if(string.length - 1 !== 0 ) {

        return revers(string.slice(1)) + string[0]
    } 
    return string
}
console.log(revers('hello guys'))


function searchBinary (arr, finding) {
    let left = 0;
    let right = arr.length + 1;
    const middle = Math.floor((left + right) / 2); // номер среднего елемента массива

    if (middle === finding) {

        return true
    }    // проверяем если искомое равно середине выводим тру

    else if (finding < middle) {
        left = middle - 1
    } 
    else { 
        right = middle + 1 
    }
    
    

    
    
    
}

console.log(searchBinary([1,2,3,4,5,6,7,8,9,10], 7));

/*if(!arr.length) {
    
        return false 
    } else  {
        


        
        return arr[middle] !== finding ? 
        searchBinary((arr[middle] > finding) ? 
        arr.slice(0, middle) : arr.slice(middle + 1), finding) : arr[middle];
    }*/

/*function revers(string) {

    return string.length - 1 ? revers(string.slice(1)) + string[0] : string;
};
console.log(revers('12345'));*/