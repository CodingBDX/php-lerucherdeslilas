let menu = document.querySelector('#changeicon ')
let toggle = document.querySelector('.toggle')
let showcase = document.querySelector('.showcase')
let menuB = document.querySelector('.menu')
menu.onclick = () => {
  menu.classList.toggle('fa-circle-xmark')
toggle.classList.toggle('active')
showcase.classList.toggle('active')
menuB.classList.toggle('active')

document.body.classList.toggle('active')
}

function imgSlider(anything) {
  document.querySelector('.honeyImg').src = anything
}
AOS.init();