// Task 1
// Write a JavaScript program to sort the items of an array.
// Sample array : let numbers = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
// Sample Output : -4,-3,1,2,3,5,6,7,8

let num = [-3, 8, 7, 6, 5, -4, 3, 2, 1]
//console.log(num.sort((a,b)=>a-b).join());



// Task 2
// Write a JavaScript program to compute the union of two arrays.
// Sample Data :
// Sample input : console.log(union([1, 2, 3], [100, 2, 1, 10]));
// Sample output : [1, 2, 3, 10, 100]

let arr = [1, 2, 3]
let arr2 = [100, 2, 1, 10]
let combineArr = arr.concat(arr2).sort((a, b) => a - b)
for (let i = 0; i < combineArr.length; i++) {
    if (combineArr[i] == combineArr[i + 1]) {
        combineArr.splice(combineArr[i], 1)
    }
}
//console.log(combineArr);



// Task 3
// Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array.
// Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]
// Expected output : [15, -22, 47]

// Version 1
var removeArr = (...params) => {
    let nums = params.filter(x=>typeof x === 'number' && !isNaN(x) && x !== 0)
    return nums;
}
// console.log(removeArr(NaN, 0, 15, false, -22, '', undefined, 47, null));


// Version 2
var newArr = [];
var removeArr = (...params) => {
    for (let i = 0; i < params.length; i++) {
        if (typeof params[i] === 'number' && !isNaN(params[i]) && params[i] !== 0) {
            newArr.push(params[i]);
        }
    }
    return newArr;
}
// console.log(removeArr(NaN, 0, 15, false, -22, '', undefined, 47, null));



// Task 4
// Write a JavaScript function to sort the following array of objects by title value.
// Sample object :let library = [
//  { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254}, 
//  { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264}, 
//  { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245} 
//  ];

let library = [
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254}, 
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264}, 
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245} 
    ];

library.sort((a, b) => {
        if (a.title < b.title) return -1;
        if (a.title > b.title) return 1;
        return 0;
    });

//console.log(library);



// Task 5
// Write a JavaScript program to check if an array is a factor chain or not.
// A factor chain is an array in which the previous element is a factor of the next consecutive element. The following is a factor chain:
// [2, 4, 8, 16, 32]
// // 2 is a factor of 4
// // 4 is a factor of 8
// // 8 is a factor of 16
// // 16 is a factor of 32

//  :
// ([2, 4, 8, 16, 32]) -> true
// ([2, 4, 16, 32, 64]) -> true
// ([2, 4, 16, 32, 68]) -> false

let chainArr = (...params)=>{
    for (let i = 0; i < params.length; i++) {
        if (params[i + 1] % params[i] === 0)
        return true;

        return false;
        
    }
}
console.log(chainArr(3,27,81,243));
