let h1 = document.querySelector("h1");



function changeColor(color,delay,nextColorChanged){
    setTimeout(()=>{
        h1.style.color = color;
      if(nextColorChanged) nextColorChanged()
    },delay)
}

changeColor("red",1000,()=>{
    changeColor("green",1000,()=>{
        changeColor("Yellow",1000,()=>{
            changeColor("blue",1000,()=>{
                changeColor("purple",1000)
            })
        })
    })
})
