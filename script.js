const openDown = document.getElementById('dropDown');
const info = document.getElementById('info');
const close = document.getElementById('close');

const dropDown =() => {
    info.style.display = 'block';
}

const closed = () => {
     info. style.display = 'none'
}

openDown.addEventListener('click', dropDown);
close.addEventListener('click', closed);


let count = 0;
let curImgSrc = '';
let moveCount = 0;
let score = 0;

const img = document.querySelector('img');
const cards = document.querySelectorAll('.card-item');


cards.forEach( el => el.addEventListener('click', event => {
    clickHandler(event);
    const moves = document.getElementById("moves");
    const point = document.querySelector("#score");
    moves.innerText = moveCount;
    point.innerText = score;
  }));
    
    function clickHandler(event){
    event.preventDefault();
    if(event.target.tagName ==='A'){

    count++;
    moveCount++;
   
    event.target.children[0].style.display="block";
    event.target.children[0].classList.add("active");
    
    if(count === 2) {
        const activeCards = document.getElementsByClassName("active");
    
        if ( activeCards[0].children[0].src !== activeCards[1].children[0].src )  {
           alert('noMatch');
            setTimeout(function () { 
                let i=0; 
                while( i < 2){
                    activeCards[0].style.display="none";
                    activeCards[0].classList.remove("active");
                    i++;
                    
                }

            }, 100);
         
        } else {

            score++;
            show();
          
            setTimeout(function(){ 
                let i = 0; 
                while( i < 2 ){
                    activeCards[0].classList.remove("active");
                    i++;   
                }
            }, 100);
        }
        count=0;
        
    }
}
}

const images = document.querySelector('.container-cards');
const allImage = document.getElementsByTagName('img');
const reset = document.getElementById('reset');
reset.addEventListener('click', action);


function action() {
    
    for(let i=0; i < allImage.length; i++) {
         allImage[i].style.display='none';
         won.style.display = 'none'
         moves.innerText = 0;
         score.innerText == 0;
  }
    location.reload();

  }


const won = document.querySelector('.winner-tag');
function show() {
    if (score === 6){
        won.style.display = 'block'
    }
}