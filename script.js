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