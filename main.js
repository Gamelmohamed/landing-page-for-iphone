let img = document.querySelector(".iphone-img")
let contaner = document.querySelector(".contaner")
let colorName = document.querySelector(".color-name h3")

function changeColor(name){
    colorName.innerHTML = name
}

function phones(phone){
    img.src = phone
}

function backgroundColor(color){
    contaner.style.background = color
}
