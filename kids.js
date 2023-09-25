document.querySelector('img').addEventListener('click', function() {
    let img = document.querySelector('img');
    if (img.style.width === '100%') {
        img.style.width = 'initial';
    } else {
        img.style.width = '100%';
    }
});
