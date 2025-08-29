// script prompt nama start
let nama = prompt("Hello, please tell me who you are :")

function cekValidNama() {
    while (true) {
        if (!nama) {
            nama = prompt ("You forgot to enter your name, dude. Please enter it again:")
        } else if (!/^[a-zA-Z\s]+$/.test(nama)) {
            nama = prompt ("Ah, it seems you've entered the wrong name. Please use alphabetical characters only.")
        } else {
            nama
            break
        }
    }
    return nama.trim()
}

let currentHour = new Date().getHours()
let currentMinutes = new Date().getMinutes()
let totalHours = currentHour * 60 + currentMinutes

console.log(totalHours)

if (totalHours >= 240 && totalHours <= 659) {
    document.getElementById("greeting").innerHTML=`Good Morning, ${cekValidNama()}`
} else if (totalHours >= 660 && totalHours <= 989) {
    document.getElementById("greeting").innerHTML=`Good Afternoon, ${cekValidNama()}`
} else {
    document.getElementById("greeting").innerHTML=`Good Evening, ${cekValidNama()}`
}
// script prompt nama end

// script date start
const now = new Date()
const fullDate = new Intl.DateTimeFormat("en-UK", {day: "numeric", month: "long", year: "numeric"}).format(now)
const fullDay = new Intl.DateTimeFormat("en-US", {weekday: "long"}).format(now)
// script date end

// script time start
const fullTime = new Intl.DateTimeFormat("en-US", {timeStyle:"long"}).format(now)
// script time end

// script weather start
//get current location
navigator.geolocation.getCurrentPosition(success, error)

const apiKey = "22b33c00b5c1a6dd40a2a2aa59bfca4a"

//if response OK
async function success(position) {
    const lat = position.coords.latitude
    const long = position.coords.longitude

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`

    try {
        const result = await fetch(url)
        if (!result.ok) {
            throw new Error(`HTTP ERROR: ${result.status}`);
        }

        const data = await result.json()

        document.getElementById('weather').innerHTML = `${data.name}, ${data.sys.country} ${Math.ceil(data.main.temp)}°C ${data.weather[0].description}`
        document.getElementById("date").innerHTML = `${fullDay}, ${fullDate}`
        document.getElementById('time').innerHTML = fullTime

        feather.replace();

    } catch (error) {
        document.getElementById('weather').innerHTML = `Unknown, -- °C`
        document.getElementById("date").innerHTML = `${fullDay}, ${fullDate}`
        document.getElementById('time').innerHTML = fullTime

        feather.replace();
    }
}

// If response not OK
function error() {
        document.getElementById('weather').innerHTML = `Unknown, -- °C`
        document.getElementById("date").innerHTML = `${fullDay}, ${fullDate}`
        document.getElementById('time').innerHTML = fullTime

        feather.replace();
}
// script weather end

// script main content start
const form = document.getElementById('todo-form')
const input = document.getElementById('todo-input')
const list = document.getElementById('todo-list')

form.addEventListener('submit', addInput)

function addInput(event) {
    event.preventDefault();

    const text = input.value.trim();

    if (!text) {
        return
    }

    const li = document.createElement('li');
    li.textContent = text

    const deleteButton = document.createElement('button')
    deleteButton.textContent = "Delete"
    deleteButton.type = "button"
    deleteButton.className = "del-btn"
    deleteButton.addEventListener("click", () => li.remove())

    li.appendChild(deleteButton)
    list.appendChild(li)

    input.value = ''
    input.focus()
}
// script main content end
