const openDown = document.getElementById('dropDown')

const info = document.getElementById('info')

const close = document.getElementById('close')


const dropDown =() => {
    info.style.display = 'block';
}

const closed = () => {
    info. style.display = 'none';
}


openDown.addEventListener('click', dropDown);
close.addEventListener('click', closed);
