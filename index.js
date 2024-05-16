const Timer = document.getElementById("timer")
const playBtn = document.getElementById("play-btn")
const resetBtn = document.getElementById("reset-btn")
let hours = 0;
let minutes = 0;
let seconds = 0;

let leadingHours = 0;
let leadingMinutes = 0;
let leadingSeconds = 0;


let timeInterval = null
let timerStatus = "stopped"


playBtn.addEventListener('click',function(){
    if(timerStatus === "stopped"){
    timeInterval = window.setInterval(stopwatch, 1000)
    playBtn.innerHTML = `<i class="fas fa-pause" id="pause-btn"></i>`
    timerStatus ="started"
}else {
    window.clearInterval(timeInterval)
    playBtn.innerHTML =  `<i class="fas fa-play" id="playstop-btn"></i>`
    timerStatus = "stopped"
   
}
})



function stopwatch() {

    seconds ++

    if(seconds / 60 === 1){
        seconds = 0;
        minutes ++;

        if(minutes / 60 === 1){
            minutes = 0;
            hours ++
        }
    }

    if(seconds < 10){
        leadingSeconds = "0" + seconds.toString()
    }else {
        leadingSeconds = seconds
    }
    if(minutes < 10){
        leadingMinutes = "0" + minutes.toString()
    }else {
        leadingMinutes = minutes
    }
    if(hours < 10){
        leadingHours = "0" + hours.toString()
    }
    Timer.innerText = `${leadingHours} : ${leadingMinutes} : ${leadingSeconds}`
}
resetBtn.addEventListener('click',function(){
     hours = 0;
     minutes = 0;
     seconds = 0;
     leadingHours = 0;
     leadingMinutes = 0;
     leadingSeconds = 0;
    playBtn.innerHTML =  `<i class="fas fa-play" id="playstop-btn"></i>`
    window.clearInterval(timeInterval)
    timerStatus = "stopped"
    timeInterval = null
    Timer.innerText = "00 : 00 : 00"
})
