// var fs = require('fs');

// const filename = 'data.txt';

// fs.writeFile(filename, 'blah blah blah', (err)=> {
//     if (err){
//         console.error(err);
//         return;
//         }
//         console.log('Successfull write');
// });

// fs.appendFile('data.txt', 'blah blah blah', (err) => {
//     if (err){
//         console.log(err);
//         return
//     }
//     console.log('Brao be brat');
//   });

//   fs.readFile(filename,'utf8' (err, data) => {
//     if (err){
//         console.log(err);
//         return
//     }
//     console.log(data);
//   });
  
//   const write = (filename, data) => {
//     return new Promise((success, fail) => {
//         fs.writeFile(filename, data, (err)=>{
//             if(err){
//                 return fail(err);
//             }
//             return success();
//         });
//     }
//     const append = (filename, data) =>{
//         return new Promise((success, fail)=>{
//             fs.appendFile(filename, data, (error)=>{
//             if (err){
//                 return fail(err);
//             }
//             return success();
//            })
//         })
//     }
//     const read = (fname) =>{
//         return new Promise ((success, fail) =>{
//             fs.readFile(filename,'utf8',  )
//         })
//     }