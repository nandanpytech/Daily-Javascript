const notification=document.querySelector(".notification")
const btn=document.querySelectorAll(".btn")

const toastdetails=[
    {
        icon:"fa-circle-check",
        msg:"Success Message"
    },
    {
        icon:"fa-circle-xmark",
        msg:"Error Message"
    },
   {
        icon:"fa-triangle-exclamation",
        msg:"Danger Message"
    },
    {
        icon:"fa-circle-info",
        msg:"Info Message"
    },
]

const removeToast=(toast)=>{
    toast.classList.add("hide")
    setTimeout(()=>{
        toast.remove()
    },400)
}

btn.forEach((element,id) => {
    element.addEventListener("click",function(e){
        const details=toastdetails[id]
        const toast=document.createElement("div")
        toast.className=`toast ${e.target.className.slice(4)}`
    
        toast.innerHTML=`
        <div class="col">
            <i class="fa-solid ${details.icon}"></i>
            <span class="text">${details.msg}</span>
        </div>
        <i class="fa-solid fa-circle-xmark"></i>
        `
        notification.append(toast)

       setTimeout(() => {
        removeToast(toast)
       }, 5000);
    })
});