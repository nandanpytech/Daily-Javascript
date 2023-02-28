const container=document.querySelector(".container")
const add_note=document.querySelector(".add")
const edit=document.querySelector(".edit")
const delet=document.querySelector(".delete")
const user_data=document.querySelector("#user_data_form")


let notes=JSON.parse(localStorage.getItem("notes") || "[]")
shownote()


function shownote(){
    let notes= JSON.parse(localStorage.getItem("notes"))
    // container.innerHTML=""
    if(notes){
        notes.map((ele)=>{
            let item=`
            <div class="item">
                <p class="title">${ele.note}</p>
                <p class="desc">${ele.desc}</p>
                <div class="edit_delet">
                    <button class="edit">Edit</button>
                    <button class="delete">Delete</button>
                </div>
             </div>
            `
            container.innerHTML+=item
            
        })
    }
   
}


function addnotes(){
    const data=new FormData(user_data)
    const values=[...data.entries()]
    let new_employee={}

    for(let item of values){
      new_employee[item[0]]=item[1]
    }
    notes.push(new_employee)
    localStorage.setItem("notes",JSON.stringify(notes))

    shownote()
}

user_data.addEventListener("submit",(e)=>{
    e.preventDefault()
    addnotes()
})

const register_modal=document.querySelector(".register_modal")



function openmodal(){
    register_modal.classList.add("open_modal")
}
function closemodal(){
    register_modal.classList.remove("open_modal")
}
register_modal.addEventListener("click",function(e){
    if(e.target.className=="register_modal open_modal"){
        closemodal()
    }
})