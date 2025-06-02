
// function Hello(){
//     console.log("inside the Hello fux");
    
// }


// function demo(){
//     console.log("inside Demo fux");
//     Hello();
// }

// console.log("Calling Demo fux");
// demo();


// console.log("Done ! bye bye");



//   break point


function one(){
    return 1;
}
function two(){
    return one() + one();
}

function three(){
    let ans = two() + one();
    console.log(ans);
}


three()