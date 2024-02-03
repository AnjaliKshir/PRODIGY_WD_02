const time = document.getElementById('time')
const lap = document.getElementById('lap_btn')
const start = document.getElementById('start_btn')
const stop = document.getElementById('stop_btn')
const reset = document.getElementById('reset_btn')
const resume = document.getElementById('resume_btn')
const lap_list = document.getElementById('lap_list')

let [hrs, mins, secs] = [0,0,0]
let timer = null
let count = 0

const stopwatch = () =>{

    secs++
    if(secs == 60)
    {
        secs = 0
        mins++

        if(mins == 60)
        {
            mins = 0
            hrs++
        }
    }

    let h = (hrs<10)? "0"+hrs : hrs
    let m = (mins<10)? "0"+mins : mins
    let s = (secs<10)? "0"+secs : secs

    time.innerHTML = `${h} : ${m} : ${s}`

}

const Start = () =>{


    if(timer!=null)
    {
        clearInterval(timer)
    }
    timer = setInterval(stopwatch,1000) //1000ms = 1s

    start.style.display = "none"
    stop.style.display = "block"
    lap.removeAttribute("disabled")
}

const Stop = () =>{
    clearInterval(timer)

    stop.style.display = "none"
    resume.style.display = "block"
    lap.style.display = "none"
    reset.style.display = "block"
}

const Reset = () =>{
    
    [hrs, mins, secs] = [0,0,0]
    time.innerHTML = "00 : 00 : 00"
    count = 0
    lap_list.innerHTML = " "

    reset.style.display = "none"
    lap.style.display = "block"

    resume.style.display = "none"
    start.style.display = "block"

}

const Resume = () =>{
    if(timer!=null)
    {
        clearInterval(timer)
    }
    timer = setInterval(stopwatch,1000) //1000ms = 1s

    resume.style.display = "none"
    stop.style.display = "block"

    reset.style.display = "none"
    lap.style.display = "block"
}

const Lap = () =>{
    count++
    let list = document.createElement("li")
    list.style.listStyle = "none"

    let h = (hrs<10)? "0"+hrs : hrs
    let m = (mins<10)? "0"+mins : mins
    let s = (secs<10)? "0"+secs : secs
    let c = (count<10)? "0"+count : count

    list.innerHTML = `${c}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${h} : ${m} : ${s}`
    lap_list.appendChild(list)
    lap_list.scroll({top:lap_list.scrollHeight, behavior:"smooth"})

}