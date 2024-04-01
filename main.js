let img = document.querySelector(".iphone-img")
let contaner = document.querySelector(".contaner")
let colorName = document.querySelector(".color-name h3")
let page1 = document.getElementById("page1")
let page2 = document.getElementById("page2")

window.onload = function(){
    page2.style.display = "none"
}

function changeColor(name){
    colorName.innerHTML = name
}

function phones(phone){
    img.src = phone
}

function backgroundColor(color){
    contaner.style.background = color
}

function goToPage2(){
page1.style.display="none"
page2.style.display="block"
}

// function goToPage2(){
//     page1.style.display="none"
//     page2.style.display="block"
//     }