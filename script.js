alert("press p for a better experience :D")
// Variables
let dashCubeEl = document.querySelector('#Dush-Cube'),
    Xamount = 10,
    Yamount = 10,
    bodyEl = document.body
// changes the color
let randomColor;
function changeRabdomStyles() {
    randomColor = Math.floor(Math.random() * 16777215).toString(16);
    bodyEl.style.background = `#${randomColor}`
}
// moves the cube  with arrow keys
window.addEventListener("keydown", (e) => {
    // moves the cube to top
    if (e.key == 'w' || e.key == 'ArrowUp') {
        Yamount -= 5
        dashCubeEl.style.top = `${Yamount}px`
        changeRabdomStyles()
    }
    // moves the cube to bottom
    else if (e.key == 's' || e.key == 'ArrowDown') {
        Yamount += 5
        dashCubeEl.style.top = `${Yamount}px`
        changeRabdomStyles()
    }
    // moves the cube to right
    else if (e.key == 'd' || e.key == 'ArrowRight') {
        Xamount += 5
        dashCubeEl.style.left = `${Xamount}px`
        changeRabdomStyles()
    } 
    // moves the cube to left
    else if (e.key == 'a' || e.key == 'ArrowLeft') {
        dashCubeEl.style.left = `${Xamount}px`
        Xamount -= 5
        changeRabdomStyles()
    } else if(e.key == "p"){
        playMusic()
    }
})

// plays music
let musicEl = document.querySelector('audio')
function playMusic(){
    musicEl.volume = 0.3;
    musicEl.play()
}

// random direction
let randomX,
    randomY
dashCubeEl.addEventListener("click", () => {
    randomX = Math.floor(Math.random() * window.innerWidth)
    randomY = Math.floor(Math.random() * window.innerHeight)
    dashCubeEl.style.top = `${randomY}px`
    dashCubeEl.style.left = `${randomX}px`
    changeRabdomStyles()
})
