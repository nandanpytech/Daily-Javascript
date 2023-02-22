let input=document.querySelector("#input")
let lists=document.querySelector("#lists")

async function searchText(value){
    let data=await fetch("/AutoSearch/details.json")
    let res=await data.json()
    let regex=new RegExp(`^${value}`,"gi")
    let matches=res.filter((ele)=>{
        return ele.name.match(regex)
    })
    if(value.length===0){
        matches=[]
    }

    show_suggestion(matches)
}
function show_suggestion(arr){
    lists.innerHTML=" "
    arr.map((ele)=>{
         lists.innerHTML+=`
        <li class="item">${ele.name}</li>
        `
    })
}

lists.addEventListener("click",(e)=>{
    input.value=e.target.innerHTML
})




input.addEventListener("input",()=>searchText(input.value))