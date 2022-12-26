// const p = new Promise((resolve, reject) => {
//   let a = 2 + 1;
//   if (a == 2) {
//     resolve('success');
//   } else {
//     reject('reject');
//   }
// });


// p.then(e=>{
//     console.log(e)
// })
// .catch(e=>{
//     console.log(e)
// })


var x=1;

var output= (function(){
    delete x;
    return x;
})()
console.log(output)


console.log(output)