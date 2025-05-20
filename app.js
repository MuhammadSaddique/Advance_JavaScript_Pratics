

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


// let cars = ["toyota","farari","lambergani","audi"];
// cars.shift();
// console.log(cars);

// cars.unshift("truck");
// console.log(cars);
// cars.pop();

// cars.push("BMW","XUE");
// console.log(cars);

// // cars.splice(2,3);
// // console.log(cars);


// cars.splice(0,0,"quniqi","Utong","bike","125");
// console.log(cars);

// cars.splice(3,0,"marcedies");
// console.log(cars);


// cars.splice(3,1,"gewon");
// console.log(cars);

// cars.sort();
// console.log(cars);

//                loop;
// print odd number


// console.log("fordward");

// for(let i=1; i<=15;i=i+2){
//     console.log(i);
    
// }

// console.log("backward");

// for(let i=15; i>=1; i=i-2){
//     console.log(i);
// }

// // even number 

// console.log("Even Start");


// for(let i=2;i<=10;i=i+2){
//     console.log(i);
    
// }

// Multiplaiction
// console.log("Multipliction");

// for(let i=5;i<=50;i=i+5){
// console.log(i);

// }


// let n = prompt("Write your number");
//  n = parseInt(n)
// for(let i=n; i<=n*10; i=i+n){
//     console.log(i);
    

// }



// nested loop

// for(let i=1;i<=3;i++){
//     console.log(`Value of ${i}`);
    
//     for(let j=1;j<=3;j++){
//         console.log(j);
        
//     }
// }


// for and while loop


// const favMovie = "amirkhan";

// let guess = prompt("Guess my fravite movie");

// while((guess != favMovie)&&(guess != "quite")){
//  prompt("wrong guess. Please try again");
// }

// if(guess==favMovie){
//     console.log("Congrate!!!");
// }else{
//     console.log("You have quite");
    
// }

// todo app


// let todo = [];

//  let req = prompt("Please enter your request!")

//  while(true){
//     if(req =="quite"){
//         console.log("quitting app");
//         break
//     }
//     if(req == "list"){
//         console.log("--------------------");
        
//         for(task of todo){
//             console.log(task);
//         }
//         console.log("--------------------");
//     }else if(req == "add"){
//         let task = prompt("Please enter the task you want to add!");
//         todo.push(task);
//         console.log("task add");
        
//     }
//     req = prompt("Please enter your request!")
//  }



// functions


// function rollDice(){
//     let rand = Math.floor(Math.random()*6)+1;
//     console.log(rand);    
// }
// rollDice()
// rollDice()
// rollDice()
// rollDice()
// rollDice()
// rollDice()
// rollDice()
// rollDice()


// function printName(name){
//     console.log(name);
    
// }
// printName("saddique")
// printName("Qadoos")




// function calAvg(a,b,c){
//     avg = (a+b+c)/3
//     console.log(avg);
    
// }
// calAvg(10,20,34);


// function getSum(n){
//     let sum = 0;
//     for(let i=1;i<=n; i++){
//         sum +=i;
//     }
//     return sum
// }
// let value = getSum(4);
// console.log(value);



// let arr = ["hi","bye","hu","he"];

// function concate(arr){
//     let result = "";
//     for(let i=0; i< arr.lenght;i++){
//         result += arr[i];
//     }
//     return result;
// }
// console.log(concate(arr));


// High order functions



// function multipleGreet(func,n){
//     for(let i=0;i<=n; i++){
//         func()
//     }
// }

// let greet = function(){
//     console.log("Hi");
// }

// // greet();
// multipleGreet(greet,4);



// let odd = function(n){
//     console.log(!(n % 2 == 0));
// }
// let even = function(n){
//     console.log((n % 2 == 0));
// }
// odd(2);
// odd(1);
// even(2)
// even(5)


// function oddOrevenFactory(request){
//     if(request == "odd"){
//         let odd = function(n){
//     console.log(!(n % 2 == 0));
//         }
// }else if(request == "even"){
//     let even = function(n){
//     console.log((n % 2 == 0));
// }
// }else{
//     console.log("wrong request!!!");
    
// }
//     }


// let request = "odd";

// oddOrevenFactory()


// this key word


// const student = {
//     name : "saddique",
//     age: 22,
//     eng: 97,
//     phy: 95,
//     math: 99,
//      getAvg(){
        

//     }
// }



// // try and catch


// console.log("Hello");
// console.log("Hello");
// console.log("Hello");

// try{
//     console.log(a);

// }catch(error){
// console.log("thre is an error in which a is not define");

// }
 

// console.log("Hello2");
// console.log("Hello2");
// console.log("Hello2");
// console.log("Hello2");
// console.log("Hello2");



//                                         arow functions


// const sum = (a,b)=>{
//  console.log(a+b);
 
// }
// sum(4,5)


// const cube = (n)=>{
//     return n*n*n
// }

// let c = cube(6);
// console.log(c);



// const pow = (a,b) =>{
//     return a**b;
// }
// let p = pow(4,2);
// console.log(p);


// console.log("Hi it's starting!");
// setTimeout(()=>{
//     console.log("it is inside the set time out!!!");
    
// },4000);

// console.log("Hi it's the end!!!");


// setInterval(()=>{
//     console.log("it is set intervel!!!");
    
// },5000);




// let id = setInterval(()=>{
// console.log("Hello");
// },2000);


// setTimeout(()=>{
//     clearInterval(id);
//     console.log("clear interval ran!!!");
    
// },10000)




let arr = [1,2,3,4,5];


arr.forEach(function(el){
    console.log(el);
    
})



let print = function(el){
    console.log(el);
}
arr.forEach(print);


let arrr = [1,2,3,4,5,6];

let double = arrr.map((el)=>{
    return el*el;;
});
console.log(double);



let nums = [1,2,3,4,5,6,7,8,9,10,11,22,24,56];

let even = nums.filter((el)=>{
    return el % 2 == 0;
});
console.log("Even ",even);



let odd = nums.filter((el)=>{
    return el % 2 !== 0;
});
console.log("Odd",odd);
