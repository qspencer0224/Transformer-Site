const boxToCircle = () =>{
    // 1.) target box
    let square = document.querySelector('.box')
    square.classList.toggle('circle')
}

const boxToBio = ()=>{
    let square = document.querySelector('.box')
    square.classList.toggle('bio')
}

const showBio = ()=>{
    boxToBio()
    let newBox = document.querySelector('.bio')
    newBox.innerHTML = "Per Scholas presents "
}

const hideImage = ()=>{
    let target = document.querySelector('.jordan')
    target.classList.toggle('disappear')
    let btn = document.querySelector('.hidden')
    btn.innerHTML = "Show Me"
}

const fontColor = ()=>{
    let paint = document.querySelector('.box')
    paint.classList.toggle('blued')
}

const swapImg = ()=>{
   let swapped = document.getElementById('.j23')
   swapped.classList.toggle('src')

}

const imgSwitchBox = ()=>{
    let touch = document.querySelector('.toggleOne')
    touch.classList.toggle('src')
}
// _______________________________________

const startRun = () =>{
    let girl = document.querySelector('.runner')
    girl.classList.toggle('running')
}

const goSmooth = () =>{
    let ball = document.querySelector('.smooth')
    ball.classList.toggle('rolling')
}