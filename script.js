
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
     info. style.display = 'none'
}
// events for the buttons
openDown.addEventListener('click', dropDown);
close.addEventListener('click', closed);

//////////////////// adding functions on cards 


// console.log(cardItem)
let count = 0;
let curImgSrc = '';

const img = document.querySelector('img');
const cards = document.querySelectorAll('.card-item');


cards.forEach(el => el.addEventListener('click', event => {
    clickHandler(event);
  }));
function clickHandler(event){
    event.preventDefault();
    count++;
    console.log(event);
    event.target.children[0].style.display="block";
    event.target.children[0].classList.add("active");
    event.target.children[0].children[0].classList.add("classOfclicked")
    if(count==2){
        const clickedCards = document.getElementsByClassName("classOfclicked");
        const activeCards = document.getElementsByClassName("active")
    console.log(activeCards)
        if(activeCards[activeCards.length-2].children[0].src != activeCards[activeCards.length-1].children[0].src)  {
           alert('noMatch')
            setTimeout(function(){ 
                for(const activeCard of activeCards){
                    // activeCard.classList.remove("active")
                    activeCard.children[0].style.display="none";
                    activeCard.children[0].classList.remove("active");
                 
                  console.log(activeCard)
                }console.log(activeCards)
                
            }, 2000);
         
        }else{
            alert('match')
            for(let activeCard of activeCards){
                activeCard.classList.remove("active");
            }
        }
        count=0;
        
        //document.getElementsByClassName("active").classList.remove("active");
    }
    else{
        curImgSrc = event.target.children[0].children[0].src;
        }
}



///////////////





   

