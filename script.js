// Variables
let dashCubeEl = document.querySelector('#Dush-Cube'),
    Xamount = 10,
    Yamount = 10

// moves the cube  with arrow keys
window.addEventListener("keydown", (e) => {
    // moves the cube to top
    if (e.key == 'w' || e.key == 'ArrowUp') {
        Yamount -= 5
        dashCubeEl.style.top = `${Yamount}px`
    }
    // moves the cube to bottom
    else if (e.key == 's' || e.key == 'ArrowDown') {
        Yamount += 5
        dashCubeEl.style.top = `${Yamount}px`
    }
    // moves the cube to right
    else if (e.key == 'd' || e.key == 'ArrowRight') {
        Xamount += 5
        dashCubeEl.style.left = `${Xamount}px`
    }
    // moves the cube to left
    else if (e.key == 'a' || e.key == 'ArrowLeft') {

        dashCubeEl.style.left = `${Xamount}px`
        Xamount -= 5
    }
})


// random direction
let randomX,
    randomY
dashCubeEl.addEventListener("click", () => {
    randomX = Math.floor(Math.random() * window.innerWidth)
    randomY = Math.floor(Math.random() * window.innerHeight)
    dashCubeEl.style.top = `${randomY}px`
    dashCubeEl.style.left = `${randomX}px`
})