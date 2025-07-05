

// async  function greet(){
//     // throw "Error is occured"
//     return "Hello world"
// }
// greet()
// .then((result)=>{
//     console.log("Promised was resolved");
//     console.log("result is :" ,result);
// })
// .catch((err)=>{
//     console.log("promised was rejected with the error: ",err);
    
// })


// function getNum(){
//     return new Promise((reslove,reject)=>{
//         setTimeout(() => {
//             let num = Math.floor(Math.random()* 10)+1;
//             console.log(num);
//             reslove()
//         }, 1000);
//     })
// }


// async function demo() {
//    await getNum()
//    await getNum()
//    await getNum()
//    await getNum()
//    await getNum()
//    await getNum()
//    await getNum()
   
// }





// let h1 = document.querySelector("h1");

// function changeColor(color,delay){
//     return new Promise((reslove,reject)=>{

//         setTimeout(()=>{
//             let num = Math.floor(Math.random() * 10) +1;
//             if(num >3){
//                 reject("Promise Rejected")
//             }

//             h1.style.color = color;
//             console.log(`Color is changed to : ${color}`);
            
//             reslove("Color is Changed!")
//         },delay)
//     })
// }

// async function demo() {
//     try {

//  await   changeColor("red",1000)
//  await   changeColor("green",1000)
//  await  changeColor("blue",1000)
//  await  changeColor("pink",1000)
//  await changeColor("purple",1000)
//  await    changeColor("yellow",1000)
//  await  changeColor("orange",1000);
//     } catch (error) {
//         console.log("error Caught");
//         console.log(error);   
//     }
 

//   let a = 45;
// console.log(a);
// console.log("new number is:", a + 3);


// }



// let url = "https://catfact.ninja/fact";

// fetch(url)
// .then((res)=>{
//     console.log(res)
//     res.json().then((data)=>{
//         console.log(data);
        
//     })
// })
// .catch((err)=>{
//     console.log("Error ---",err);
    
// })



// let btn = document.querySelector("button");

// btn.addEventListener("click", async ()=>{
//     let fact = await getFacts();
//     console.log(fact);
//     let p = document.querySelector("#result");
//     p.innerText = fact;
    
// })



// let url = "https://catfact.ninja/fact";
// async function getFacts() {
//     try {
//         let res = await axios.get(url);
//        return res.data.fact
        
//     } catch (error) {
//         console.log("error ----", error);
//         return "No Fact Found"
        
//     }
// }




// let btn = document.querySelector("button");

// btn.addEventListener("click", async () => {
//    let link = await getImage();
//    let img = document.querySelector("#result");
//    img.setAttribute("scr",link)
//    console.log(link);
   
// })
   

// let url2 = "https://dog.ceo/api/breeds/image/random";

// async function getImage() {
//     try {
//         let res = await axios.get(url2);
//         return res.data.message;

        
        
//     } catch (error) {
//         console.log("errror --- ", error);
//         return "No Image Found"
        
//     }
// }



let btn = document.querySelector("button");
btn.addEventListener("click", async()=>{
    let country = document.querySelector("input").value;
    console.log(country);
    
   let colArr = await getColleges(country); 
   show(colArr)

   
    
});

function show(colArr){
    let list = document.querySelector("#list");
    list.innerText = "";
    for(col of colArr){
        console.log(col.name);
        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li)
    }
}


let url = "http://universities.hipolabs.com/search?name=";


async function getColleges(country) {
    try {
       let res = await axios.get(url + country);
       return res.data;
       
    } catch (error) {
        console.log("error ----", error);
        return [];
    }
}
