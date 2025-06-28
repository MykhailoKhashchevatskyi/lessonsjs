"use strict"

// const options = {
//   name: 'test',
//   width: 1024,
//   height: 1024,
//   colors: {
//     border: 'black',
//     bg: 'red'
//   },
//   test: function() {
//     console.log(this.colors['border']);
//   }
// }

// const {border, bg} = options.colors;



// for (let key in options){
//   if (typeof(options[key]) === 'object'){
//     for (let i in options[key]){
//       console.log(`Свойство ${i} має значення ${options[key][i]}`);
//     }
//   } else {
//     console.log(`Свойство ${key} має значення ${options[key]}`);
//   }
  
// }


// function objectLength(obj) {
//   let numberLength = 0;
//   for (let key in obj){
//     numberLength++;
//   }
//   return numberLength;
// }

// console.log(objectLength(options));
// console.log(Object.keys(options).length);

// function objLength(n){
//   let length = Object.keys(n).length;
//   return length;
// }

// function carrot(a, callback){
//   return callback(a) * 2;
// }


// console.log(carrot(options, objLength));


// const arr = [1, 2, 3, 4];


// arr.pop();
// arr.push(3);

// console.log(arr);

// const numbers = [11, 33, 12, 44, 64];

// numbers.sort(function(a, b){
//   return a - b;
// });

// console.log(numbers);
// function binarySearch(arr, key){
//   let start = 0;
//   let end = arr.length - 1;

//   while(start <= end) {
//     let middle = Math.floor((start + end) / 2);

//     if (arr[middle] === key){
//       return arr[middle];
//     } else if (arr[middle] < key) {
//       start = middle + 1;
//     } else if (arr[middle] > key) {
//       end = middle - 1;
//     }
//   }
//   return 'error';
// }



// const mari = {
//   name: 'mari',
//   age: 12,
//   work: {
//     main: 'design',
//     hobby: 'misic' 
//   }

// }

// const mimi = {};

// function copyObj(nameObj, newObjCopy){
//   let key;
//   for (key in nameObj){
//     newObjCopy[key] = nameObj[key];
//   }
// }

// copyObj(mari, mimi);

// mimi.age = 21;

// console.log(mari);
// console.log(mimi);



// const clone = (Object.assign(mari, mimi));
// clone.age = 100;
// console.log(clone);


// const oldArray = ['a', 'b', 'c'];

// const newArrey = oldArray.slice();
// newArrey[1] = 32;
// console.log(newArrey)


// const video = ['netflix', 'youtube'],
//       blogs = ['wordpres', 'veblium'],
//       sinternet = [...video, ...blogs];

// console.log(sinternet)



const array = ['a', 'b'];


const newArrey = [...array];

console.log(newArrey);


const mari = {
  a: 1,
  b: 2
}

const mimi = {...mari};
mimi.a = 3;
console.log(mari);
console.log(mimi);

