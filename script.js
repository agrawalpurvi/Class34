const boxescontainer=document.getElementById("boxes");

boxescontainer.addEventListener("click",()=>boxescontainer.classList.toggle("big"))

function createBoxes(){
    for(var i =0;i<4;i++){
        for(var j =0;j<4;j++){
            const box=document.createElement("div")
            box.classList.add("box")
            box.style.backgroundPosition=`${-j * 125}px ${-i * 125}px`
            boxescontainer.appendChild(box)

        }
    }
}

createBoxes();