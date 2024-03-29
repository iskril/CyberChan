const cursor = document.querySelector('.cursor');
let timeout;

document.addEventListener('mousemove', (e) => {
    let x = e.pageX;
    let y = e.pageY;

    cursor.style.top = y + 'px';
    cursor.style.left = x + 'px';
    cursor.style.display = 'block';

    function mouseStopped() {
        cursor.style.display = 'none';
    };
    clearTimeout(timeout);
    timeout = setTimeout(mouseStopped, 15000);
});

document.addEventListener('mouseout', () => {
    cursor.style.display = 'none';
});