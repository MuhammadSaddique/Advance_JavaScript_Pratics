let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click",function(){
    let item = document.createElement("li");
    item.innerText = inp.value;

    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");

    item.appendChild(delBtn)
    ul.appendChild(item);
    inp.value = "";
})


ul.addEventListener("click", function(event){
    if(event.target.nodeName = "Button"){
        let listItem = event.target.parentElement;
        listItem.remove()
        console.log("delete");
        
        
    }else{
        console.log("Don't Delete it");
        
    }
})


// let delBtns = document.querySelectorAll(".delete");
// for(delBtn of delBtns){
//     delBtn.addEventListener("click",function(){
//         let par = delBtn.parentElement;
//         console.log(par);
//         par.remove()
        
//     })
// }