const lists=document.querySelector(".lists")

function dragging(e){
   lists.scrollLeft-=1
}
lists.addEventListener("mousemove",dragging)