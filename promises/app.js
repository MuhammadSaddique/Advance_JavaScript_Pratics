// function savetoDB(data){
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if(internetSpeed > 4){
//         console.log("Your data is saved! ", data);
        
//     }else{
//         console.log("Weak Connection: Your data is not Saved!");
        
//     }
// }

// savetoDB("Computer System Engineer");


//   change to oringal form


// function saveDatatoDB(data,success,failure){
//     let internetSpeed = Math.floor(Math.random() * 10 )+ 1;
//     if(internetSpeed>5){
//         success()
//     }else{
//         failure()
//     }
// }

// saveDatatoDB("CSE",()=>{
//     console.log("Success: Your Data is Saved to DB!");
//     saveDatatoDB("new data pass ",()=>{
//         console.log("Sucessess 2 : Data2 is saved");
        
//     },()=>{
//         console.log("failure2 : data2 is not saved");
        
//     })
// }, ()=>{
//     console.log("Failure: Weak Connection, Your data is not saved!");
    
// })



// function saveDatatoDB(data){
//     return new Promise((success,failure)=>{
//         let internetSpeed = Math.floor(Math.random() *10) + 1;
//         if(internetSpeed > 4){
//             success("Success: Data Saved to DB!")
//         }else{
//             failure("Failure: Data is not Saved to DB")
//         }
//     })
// }

// saveDatatoDB("computer System")
// .then(()=>{
//     console.log("Promise was resloved!");
// }).catch(()=>{
//     console.log("Promise was rejected!");
    
// })


function saveDatatoDB(data){
    return new Promise((reslove,reject)=>{
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if(internetSpeed>4){
            reslove("success : Your Data is Saved in DB")
        }else{
            reject("Failure: Your data is not saved in DB")
        }
    })
}

saveDatatoDB("Promsie updated version")
.then((result)=>{
    console.log("Data1 is saved");
    console.log("Result of promise: ", result);
    
    return saveDatatoDB("Pormise 2 updated 2 version")
})
.then((result)=>{
        console.log("Data2 is saved ");
        console.log("Result of promise: ", result);
        return saveDatatoDB("promise 3")
    })
    .then((result)=>{
        console.log("Data3 is saved");
        console.log("Result of promise: " ,result);
        
    })
.catch((error)=>{
    console.log("Promise was rejected");
    console.log("Error of promise: " ,error);
})


// we are going to change the callback function into promises


let h1 = document.querySelector("h1");

function changeColor(color,delay){
    return new Promise((reslove,delay)=>{
        setTimeout(()=>{
            h1.style.color = color;
            reslove("Color is Changed!")
        },delay)
    })
}

changeColor("red",1000)
.then(()=>{
    console.log("Red color was changed!");
    return changeColor("green",1000)
})
.then(()=>{
    console.log("Green color was changed!");
    return changeColor("blue",1000)
})
.then(()=>{
    console.log("Blue color was changed!");
    return changeColor("orange",1000)
})
.then(()=>{
    console.log("Orange color was changed");
    return changeColor("yellow",1000)
})
.then(()=>{
    console.log("Yellow color was changed");
    
})