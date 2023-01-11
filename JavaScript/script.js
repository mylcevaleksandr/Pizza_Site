document.getElementById('burger').onclick = function () {
    document.getElementById('menu').classList.add('menu__open');
}

document.querySelectorAll('#menu *').forEach((item) => {
    item.onclick = () => {
        document.getElementById('menu').classList.remove('menu__open');
    }
})

console.log("Hello World!!!")