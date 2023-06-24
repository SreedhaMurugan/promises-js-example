//Mark

// let markOne = new Promise((resolve,reject) => {
//            const mark=true
//            if(mark)
//            resolve()
//            else
//            reject()
// })

// markOne.then(() =>{
//     console.log("Shree is pass in all subject")
// })
// .catch(()=>{
//     console.log("Shree is fail in all subject")
// })

//Book using nested if

// let book = new Promise((resolve,reject) =>{
//     const author = false
//     if(author){
//         resolve()
//     }
//     else{
//         reject()
//     }
// })

// book.then(()=>{
//     // console.log("Author write a book")

//     const booksecond=new Promise((resolve,reject)=>{
//         const authorone = false
//         if(authorone){
//             resolve()
//         }
//         else{
//             reject()
//         }
//     })
//     booksecond.then(()=>{
//         console.log("Book is ready to publish")
//     })
// })
// .catch(() =>{
//     console.log("Author publish the book")
// })


// let student = new Promise((resolve,reject)=>{
//       const markOne=true
//       if(markOne){
//         setTimeout(resolve,3000,"Shree is passed in all subject")
//       }
//       else{
//         reject("Shree is fail in all subject")
//       }
// })


// let studentOne = new Promise((resolve,reject)=>{
//     const markTwo=true
//     if(markTwo){
//       setTimeout(resolve,1000,"Roji is passed in all subject")
//     }
//     else{
//       reject("Roji is fail in all subject")
//     }
// })

// let studentTwo = new Promise((resolve,reject)=>{
//     const markThree=false
//     if(markThree){
//       setTimeout(resolve,2000,"Ram is passed in all subject")
//     }
//     else{
//       reject("Ram is fail in all subject")
//     }
// })

// //Promise.all
// Promise.all([student,studentOne,studentTwo])
// .then((message)=>{
//     console.log(message)
// })
// .catch((message)=>{
//     console.log(message)
// })

// //promise.allSettled status(pending,rejected,resolved(settled))

// Promise.allSettled([student,studentOne,studentTwo])
// .then((message)=>{
//     console.log(message)
// })
// .catch((message)=>{
//     console.log(message)
// })

// //promise.any
// Promise.any([student,studentOne,studentTwo])
// .then((message)=>{
//     console.log(message)
// })
// .catch((message)=>{
//     console.log(message)
// })

// //promise.race
// Promise.race([student,studentOne,studentTwo])
// .then((message)=>{
//     console.log(message)
// })
// .catch((message)=>{
//     console.log(message)
// })



//Asyn 
//Asyn is always return a promise
async function sample(){
return 'Welcome to asyn learning '
}
// console.log(sample())

//Asynchronous using try catch block
let markOne = new Promise((resolve,reject) => {
    const mark=true
    if(mark)
    resolve()
    else
    reject()
})

markOne.then(() =>{
console.log("Shree is pass in all subject")
})
.catch(()=>{
console.log("Shree is fail in all subject")
})

async function books(){
    console.log('Hello!!!!')
    res=  await markOne
    console.log(res)
    console.log('Bye....')
}
books()