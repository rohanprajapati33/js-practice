for(let i=28;i<50;i++){
     console.log(i)
 }
//while
 j = 0;
 while (j<25) {
     console.log(j+1)
     j++
 }

//do while
 let k = 0;
 do{
    
     if(k === 4){
         continue;
     }
     console.log(k+1);
     k++
 }while (k<10)

// let obj = {
//   name : "Rohan das",
//   Age : 21,
//   type : "software Engineer",
//   os : "windows"

// }
// for (Let key in obj){
//     console.log(obj[key])
// }
// console.log(done)

const myLuckyNumbers = [1,25,3,6,4,8]
for(let char of myLuckyNumbers){
    console.log("myCharacter"+ char)
}
