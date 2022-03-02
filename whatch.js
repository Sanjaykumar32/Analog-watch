// var p = document.getElementById("wh")
// var timeStart = 00 

// setInterval(() => {
//     countUpdate()
// },1000);
// function countUpdate() {
//     p.innerText  =  `${minutes}: ${seconds}`
//     timeStart++
// }

setInterval(() => {
    d = new Date();
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds(); 
 
    hrotation = 30*h + m/2;
    mrotation = 6*m
    srotation = 6*s
    hr.style.transform = `rotate(${hrotation}deg)`
    min.style.transform = `rotate(${mrotation}deg)`
    sec.style.transform = `rotate(${srotation}deg)`
},1000);