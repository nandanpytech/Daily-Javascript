let btn=document.querySelector(".btn")
let container=document.querySelector(".container")

btn.addEventListener("click",function(){
    container.innerHTML=""
    for (let i = 0; i < 8; i++) {
        let randompallet=Math.floor(Math.random()*0xffffff).toString(16)
        let pallet=`#${randompallet}`


        container.innerHTML+=`
        <div class="box" onclick="copytext(this)" >
            <div class="color" style="background-color:${pallet}"></div>
            <div class="hexvalue">${pallet}</div>
        </div>
        `
    }  
})

function copytext(ele){
   let copiedText=ele.childNodes[3].innerText

   // Copy the text inside the text field
  navigator.clipboard.writeText(copiedText);
}


