function task(){
    var today=new Date()
    var targetDate=new Date("11/14/2023 15:00:00")
    var difference=(targetDate-today)/1000
    var days=Math.floor(difference/3600/24)
    var hours=Math.floor((difference/3600)%24)
    var minutes=Math.floor((difference/60)%60)
    var seconds=Math.floor(difference%60)
    var result=document.querySelectorAll(".card h2")
    result[0].innerText=days;
    result[1].innerText=hours;
    result[2].innerText=minutes;
    result[3].innerText=seconds;
}
setInterval(task,100)