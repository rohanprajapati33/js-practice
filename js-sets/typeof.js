//let array = {"rohan"}
// console.log(typeof "rohan")
// console.log(typeof [1,2,3,4])
// console.log(typeof new Date())
// console.log(typeof myCar)
// console.log(typeof function(){})
// console.log(typeof void(0))
//console.log(array instanceof Number)
// const cars = 13;
// console.log((cars instanceof Number))

// const myDate = new Date(12/04/2023);
// console.log(myDate.constructor)

// console.log([1,2,3].constructor)
// let car = ""
// console.log(typeof car)

console.log(Number("3.14"))
console.log(Number("99 98"))
console.log(Number("Rohan"))

let y = "John";
let x = + y;
console.log(typeof x+ " "+ typeof y)

let x1 = 123;
console.log(
x1.toString() + "<br>" +
(123).toString() + "<br>" +
(100 + 23).toString());


console.log(new Date())

console.log(5 | 1)

let text = "rohan Prajapati ibject os rohan and that is"
console.log(text.match(/rohan|prajapati/g))
//console.log(text.search(/rohan/gi))
//console.log(text.replace(/rohan/gi,"bharghav"))

// let txt = "1223443456789";
// let result = txt.match(/[1-4]/g);
// console.log(result)

let txt = "re, green, red, green, gren, gr, blue, yellow,100,102";
console.log(txt.match(/re\b/g));

let v = thbdksdnsdnsdma 
const pattern = /d/;
console.log(pattern.test(v))

