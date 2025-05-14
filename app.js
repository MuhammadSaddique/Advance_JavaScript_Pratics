

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


// const getData = async () =>{
    
//     try{
//         const data = await fetch("https://fakestoreapi.com/products12345").then
//         ((res) => 
//         res.json()
//         );
//         console.log("data",data);
//     }catch(error){
//         alert("Api error")
//     }
// };


/////////////////////////// Constructor

// function Std(name,age){
//     this.stdName = name;
//     this.stdAge = age;
// }




/////////////////////////   classes



// class Std {
//     constructor(name,age){
//         this.stdName = name;
//         this.stdAge = age;
//     }
// }

// const Std1 = new Std("Saddique",20);


// console.log("Std1", Std1);

///////////////////////////////////// Method in class

// class Std {
//     constructor(name,age){
//         this.stdName = name;
//         this.stdAge = age;
//     }
//     getName(){
//         return this.getName;
//     }
// }
 
// const std1 = new Std("saddique",20);
// console.log(std1,"std1");
// std2.getName();

//                                           Trim Method 

// remove the extra spaces before and after the string and aslo it does not the effect the orgional string . It create a new string by applying its own method .


// const Password = prompt("set new Password");
// const newpass = console.log(Password.trim());
// console.log(newpass);


// let msg = "ILoveCoding";

// let message = "      help  ";
// let newMessage = message.trim().toUpperCase()
// console.log(newMessage);


// let name  = "ApnaCollege";

// console.log(name.slice(4,9));
// console.log(name.replace("Apna","Our"));
// console.log(name.indexOf("na"));


// concationation

// let primary = ["red","yellow","green"]
// let secondary = ["blue","violate","sky"]

// console.log("Primary",primary);
// console.log("Secondary",secondary);

// let allColor = primary.concat(secondary);
// console.log("AllColor: ",allColor);

// allColor.reverse();
// console.log(allColor);



// splice 


let cars = ["toyota","farari","lambergani","audi"];
cars.shift();
console.log(cars);

cars.unshift("truck");
console.log(cars);
cars.pop();

cars.push("BMW","XUE");
console.log(cars);

// cars.splice(2,3);
// console.log(cars);


cars.splice(0,0,"quniqi","Utong","bike","125");
console.log(cars);

cars.splice(3,0,"marcedies");
console.log(cars);


cars.splice(3,1,"gewon");
console.log(cars);

cars.sort();
console.log(cars);



