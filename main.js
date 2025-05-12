let statusWord = document.getElementById('status')
let timeCircle = document.getElementById("time")
let timeLeft = 1500
let timer = null
let tabs = document.querySelectorAll(".tab")

function formatTime (seconds){
    const min = Math.floor(seconds / 60)
    const sec = seconds % 60 
    return `${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`
}

function updateDisplay (){
    timeCircle.textContent = formatTime(timeLeft)
}
    function startTimer (){
        if(timer)
            clearInterval(timer)
        statusWord.textContent = "RUNNING"
        timer = setInterval(() => {
            if(timeLeft > 0 ){
                timeLeft--
                updateDisplay()
            }
        },1000)
    }

function toggleTimer(){
if (timer){
    clearInterval(timer);
    timer = null 
    statusWord.textContent = "PAUSE"
}else {
startTimer()
        }
    }
    
    tabs.forEach(tab => {
        tab.addEventListener("click",() =>{
            tabs.forEach(t =>
            t.classList.remove("active"))
            tab.classList.add("active")
            const newTime = parseInt(tab.getAttribute("data-time")|| "1500")
            timeLeft = newTime
            updateDisplay()
            startTimer()
            clearInterval(timer)
            timer = null
            statusWord.textContent = "PAUSE"
        })
    })
    
// document.addEventListener("DOMContentLoaded",updateDisplay)