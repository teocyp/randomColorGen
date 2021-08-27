const btn = document.querySelector('#btn1');
const h1 = document.querySelector('h1');

function changeColor() {
    const bg = document.querySelector('body');
    const random1 = Math.floor(Math.random() * 255) + 1;
    const random2 = Math.floor(Math.random() * 255) + 1;
    const random3 = Math.floor(Math.random() * 255) + 1;
    let colorCode = `RGB(${random1}, ${random2}, ${random3})`;
    h1.innerText = `RGB(${random1}, ${random2}, ${random3})`
    bg.style.backgroundColor = colorCode;
}

btn.addEventListener('click', changeColor);

