
//grabing the info btn
const openDown = document.getElementById('dropDown');
//grabing the txt inside the info btn
const info = document.getElementById('info');
//grabing the close btn
const close = document.getElementById('close');

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
let moveCount = 0;
let score = 0;

const img = document.querySelector('img');
const cards = document.querySelectorAll('.card-item');
// console.log(cards)


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
    // console.log(moveCount);
    // console.log(event);
    event.target.children[0].style.display="block";
    // console.log(event.target.children[0])
    event.target.children[0].classList.add("active");
    
    if(count === 2) {
        const activeCards = document.getElementsByClassName("active");
    //  console.log(activeCards)
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
// console.log(images)
const allImage = document.getElementsByTagName('img');
//  console.log(allImage)
const reset = document.getElementById('reset');
// console.log(reset);
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
    //    console.log(show)
    }
}

  

