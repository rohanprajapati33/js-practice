 const myset = new Set();
// console.log(myset)

myset.add('this');
myset.add('Myname');
myset.add('that');
myset.add(568);
console.log(myset.size)
 console.log(myset.has(568))
console.log(myset.delete('that'))
//let myset2 = new Set(1,45,'that','rohan',85,9)

for(let item of myset){
    console.log(item)
}
myset.forEach((item)=>{
    console.log(item)
})

//  let text = "rohan Prajapati 36545621"
//  let arr = Array.from(text)
//  console.log(arr)

Array.from((item)=>{
    console.log(item)
})