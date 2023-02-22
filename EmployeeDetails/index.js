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

(async function(){
const employee_list=document.querySelector(".employee_list")
const form_data=document.querySelector("#user_data_form")
const Particular_user=document.querySelector(".Particular_user")

employee_list.addEventListener("click",showdetails)

let employee= await fetch("/EmployeeDetails/EmployeeDetails.json")
let res= await employee.json()
let employees=res;
showlist()

function showlist(){
    employee_list.innerHTML=" "
    employees.forEach((ele,id)=> {
        employee_list.innerHTML+=`
        <div id=${id} class="employee_name">
            ${ele.firstname +" "+ ele.lastname}
            <i id=close${id} class="fa-solid fa-xmark"></i>
         </div>
        `
    });
}

form_data.addEventListener("submit",function(e){
    e.preventDefault()
    const data=new FormData(form_data)
    const values=[...data.entries()]
    let new_employee={}

    for(let item of values){
      new_employee[item[0]]=item[1]
    }
    employees.push(new_employee)
    closemodal()
    showlist()
})

function showdetails(e){
    const data=employees[e.target.id]
    Particular_user.innerHTML=`
    <img src="https://cdn-icons-png.flaticon.com/512/6522/6522516.png" alt="">
    <h3>${data.firstname + " " + data.lastname}</h3>
    <p>${data.Adress}</p>
    <p class="email">${data.Email}</p>
    <p class="mobile">Mobile - <span id="mob_no">${data.Contact}</span></p>
    <p class="Dob">DOB - <span id="dob_date">${data.date}</span></p>
  
    `
}
}())

