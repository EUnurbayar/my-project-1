
//grabing the info btn
const openDown = document.getElementById('dropDown')
//grabing the txt inside the info btn
const info = document.getElementById('info')
//grabing the close btn
const close = document.getElementById('close')

//call back funcion for when hit the info btn 
const dropDown =() => {
    info.style.display = 'block';
}

//call back function for hide the txt when hit the close btn
const closed = () => {
    info. style.display = 'none';
}
// events for the buttons
openDown.addEventListener('click', dropDown);
close.addEventListener('click', closed);

//////////////////// adding functions on cards 
const cardItem = document.querySelectorAll('.card-item')
// console.log(cardItem)
const img = document.querySelector('img');
const card0 = document.querySelector('.card-item')
card0.addEventListener('click', () => {

});
