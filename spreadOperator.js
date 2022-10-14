// spread with arrays

let arr = [1, "banana", "orange"];
console.log(arr);
console.log(...arr); // first
console.log([...arr]); // second- way of copying arr
let arr2 = ["hi", "my", "name", "is", "anand"];
console.log([...arr, ...arr2]); // third - combining arrays
arr.push(...arr2);
console.log(arr); //  forth - pushing contents of ony array to another
let arr3 = ["what", "are", "you", "doing"];
let arr4 = [...arr3];
console.log(arr4);
arr3.push("aparna");
console.log(arr4); // fifth-  objects are passed by ref, with the help of spread, when arr1 changes, arr2 remains the same.
let arr5 = [...arr4, "anand"];
console.log(arr5); //sixth- We can also use the spread operator to create a copy of an array and add new elements into it at the same time:

//spread with objects

let obj = { name: "sanem", occupation: "actor", series: "EK" };
 console.log({...obj}) // first- copying object 
 let obj2={...obj, country:'turky'}
 console.log(obj2) // second - We can make a shallow copy of one object and add some more information into the copied object:
 let obj3= { a: 1, b: 2 };
 let obj4 = { b: 3, c: 4, ...obj3};
 console.log(obj4);//In case of clashing properties, the property of the last object wins
 