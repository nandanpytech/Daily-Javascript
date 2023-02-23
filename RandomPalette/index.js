let btn=document.querySelector(".btn")
let container=document.querySelector(".container")
btn.addEventListener("click",function(){
    container.innerHTML=""
    let arr=[]
    for (let i = 0; i < 8; i++) {
        let randompallet=Math.floor(Math.random()*0xffffff).toString(16)
        let pallet=`#${randompallet}`
        arr.push(pallet)
    }
   arr.map((ele)=>{
    return  container.innerHTML+=`
    <div class="box" >
        <div class="color" style="background-color:${ele}"></div>
        <div class="hexvalue">${ele}</div>
    </div>
    `
   })
   
})

