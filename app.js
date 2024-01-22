

// const myPromise = new Promise( (resolve, reject) =>{
//     const isMethaiDone = true;
//     if(isMethaiDone){
//         resolve("Shahidi Mubark Hu....")
//     }else{
//         reject("Dosreee Shahidi kar looo")
//     }
// }).then( ( success) =>{
//     console.log("Success" , success);
// })
// .catch( (error) =>{
//     console.log("error", error);
// })


fetch("https://fakestoreapi.com/products")
.then( (res) => res.json())
.then( (response) =>  console.log("response",response))
.catch( (error) => console.log("error", error))


 