const hourEl = document.getElementById('hour')
const minutesEl = document.getElementById('minutes')
const secondsEl = document.getElementById('seconds')
const millesecondsEl = document.getElementById('milleseconds')
const startBtn = document.getElementById('startBtn')
const pauseBtn = document.getElementById('pauseBtn')
const continueBtn = document.getElementById('continueBtn')
const resetBtn = document.getElementById('resetBtn')

let interval
let hour = 0
let minutes = 0
let seconds = 0
let milleseconds = 0
let isPaused = false

function startTimer(){
	interval = setInterval(()=>{
		if (!isPaused){
			milleseconds += 10

			if (milleseconds === 1000){
				seconds ++
				milleseconds = 0
			}

			if (seconds === 60){
				minutes ++
				seconds = 0
			}

			if (minutes === 60){
				hour ++
				minutes = 0
			}

			millesecondsEl.textContent = formatMilleseconds(milleseconds)
			secondsEl.textContent = formatTime(seconds)
			minutesEl.textContent = formatTime(minutes)
			hourEl.textContent = formatTime(hour)
		}
	}, 10)

	startBtn.style.display = 'none'
	pauseBtn.style.display = 'block'
}

function pauseTimer(){
	isPaused = true
	pauseBtn.style.display = 'none'
	continueBtn.style.display = 'block'
	resetBtn.style.display = 'block'
}

function returnTime(){
	isPaused = false
	pauseBtn.style.display = 'block'
	continueBtn.style.display = 'none'
}

function resetTime(){
	clearInterval(interval)
	milleseconds = 0
	seconds = 0
	minutes = 0
	hour = 0

	millesecondsEl.textContent = '000'
	secondsEl.textContent = '00'
	minutesEl.textContent = '00'
	hourEl.textContent = '00'

	startBtn.style.display = 'block'
	pauseBtn.style.display = 'none'
	resetBtn.style.display = 'none'
	continueBtn.style.display = 'none'
}

function  formatTime(time) {
	return time < 10 ? `0${time}` : time
}

function formatMilleseconds(time){
	return time < 100 ? `${time}`.padStart(3, '0'): time
}