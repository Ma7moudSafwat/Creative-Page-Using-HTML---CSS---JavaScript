let img = document.querySelector('.active');
let container = document.querySelector('.header');
console.log(container)
function phones(phone) {
    img.src = phone;
}
function colors(color) {
    container.style.background = color;
}