const hexInput = document.querySelector('.hexInput')
const colorDisplay = document.querySelector('.colorDisplay')
const inputBtn = document.querySelector('.inputBtn')
const changeBtn = document.querySelector('.changeColor')
const pointsDisplay = document.querySelector('.pointsDisplay')
let hexCheck;
let points = 0

function getHexCode() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
    return hex[Math.floor(Math.random() * hex.length)]
}

function changeColor() {
    const hexCode = []

    for (let i = 0; i <= 5; i++) {
        hexCode.push(getHexCode())
    }
    let hex = `${hexCode[0]}${hexCode[1]}${hexCode[2]}${hexCode[3]}${hexCode[4]}${hexCode[5]}`
    console.log(hex)
    hexCheck = hex
    colorDisplay.style.backgroundColor = `#${hex}`
    return `#${hex}`
}

function updatePoints() {
    points++
    pointsDisplay.textContent = `${points}`
}

inputBtn.addEventListener('click', function () {
    let inputValue = (hexInput.value)
    let answer = inputValue.toUpperCase()

    if (answer === hexCheck) {
        updatePoints()
        changeColor()
        hexInput.value = ''
        hexInput.focus()
        hexInput.style.borderColor = '#000'
    } else {
        hexInput.style.borderColor = '#F00'
        hexInput.value = ''
    }
})

changeBtn.addEventListener('click', function () {
    changeColor()
    hexInput.focus()
})

changeColor()