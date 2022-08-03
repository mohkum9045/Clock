setInterval(()=>{
a=new Date()
let time = a.getHours() + " : " + a.getMinutes() + " : " + a.getSeconds();
document.getElementById("time").innerHTML=time},1000);