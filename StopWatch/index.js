
const hour=document.getElementById("hour")
const minute=document.getElementById("minute")
const second=document.getElementById("second")
const start=document.getElementById("start")
const stop=document.getElementById("stop")



start.addEventListener("click", starttimer)
stop.addEventListener("click",stoptimer)

function starttimer(){

    function setinterval(){
        counttimer=setInterval(timer,300)
    }
    setinterval()
    

    function timer(){
        if(second.value>60){
            minute.value++
            second.value=parseInt(second.value)-59
        }
        if(minute.value>60){
            hour.value++
            minute.value=parseInt(minute.value)-60
        }


        if(hour.value==0 && minute.value==0 && second.value==0){
            clearInterval(counttimer)
        }else if(second.value>0){
            second.value=second.value-1
        }else if(minute.value!=0 && second.value==0){
            second.value=59
            minute.value=minute.value-1
        }else if(hour.value!=0 && minute.value==0){
            minute.value=60
            hour.value=hour.value-1
        }
    }


}

function stoptimer(){
    clearInterval(counttimer)
}
