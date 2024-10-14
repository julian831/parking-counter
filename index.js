let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let carEl = document.getElementById("car-el")
let redEl = document.getElementById("red-el")
let blueEl = document.getElementById("blue-el")
let greenEl = document.getElementById("green-el")

let count = 30
let spaces = 30
let parkedCars = 30

function increment(){
    spaces -= 1
    countEl.textContent = spaces

    console.log( "Count: " + count)
    console.log( "Spaces: " + spaces)
    console.log( "ParkedCars: " + parkedCars)

    if(spaces <= 0){
        alert("Sorry Parking lot is full!")
        spaces = 0
    }
}

function save() {
    count = parkedCars - spaces
    saveEl.textContent  =  "Total Cars Parked: " + count

    checkAvailability()
   
}

function checkAvailability() {
    let redCapacity = 10
    let greenCapacity = 20
    let blueCapacity = 30
    console.log("Count: " + count)

  if(count < 10 ){
        redEl.textContent = redCapacity - count
    }
    else if(count >= 10 && count < 20 ){
        redEl.textContent = "FULL"
        greenEl.textContent = greenCapacity - count
    }
    else if(count >= 20 && count < 30 ){
        redEl.textContent = "FULL"
        greenEl.textContent = "FULL"
        blueEl.textContent = blueCapacity - count
        console.log(blue)
    }
    else if(count => 30)
    {
        redEl.textContent = "FULL"
        greenEl.textContent = "FULL"
        blueEl.textContent = "FULL"
    }
}

//let the parking garage hold 30 cars
//each level holds 10 cars
//once 10 cars are hit red deck will display full
//repeat for other decks
// when parking is full say "parking garage is full"