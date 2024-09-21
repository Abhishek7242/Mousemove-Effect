
for (let index = 0; index < 150; index++) {
    let box  = document.createElement('span');

    document.querySelector('.container').
    appendChild(box);
    
}

let cursor = document.querySelector('.cursor')
window.onmousemove = function (e) {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px'
}