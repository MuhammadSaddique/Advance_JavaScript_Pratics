

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


// fetch("https://fakestoreapi.com/products")
// .then( (res) => res.json())
// .then( (response) =>  console.log("response",response))
// .catch( (error) => console.log("error", error))



// const getData = async() =>{
//     const data1 = await callApi();
//     const data2 = await callApi();
//     const data3 = await callApi();
//     const data4 = await callApi();
//     const data5 = await callApi();
// }

// fetch("https://fakestoreapi.com/products")
// .then( (res) => res.json())
// .then( (Success) =>{
//     console.log(Success, "Success");
// })
// .catch( (error) =>{
//     console.log(error, "error");
// })


// const getData = async () => {
//     const data = await fetch("https://fakestoreapi.com/products").then
//     ((res) =>
//         res.json()
//     )
//     console.log("data", data);
// }


const getData = async () =>{
    
    try{
        const data = await fetch("https://fakestoreapi.com/products12345").then
        ((res) => 
        res.json()
        );
        console.log("data",data);
    }catch(error){
        alert("Api error")
    }
};




 