
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
    if(event.target.tagName ==='A'){

    count++;
    console.log(event);
    event.target.children[0].style.display="block";
    event.target.children[0].classList.add("active");
    // event.target.children[0].children[0].classList.add("classOfclicked")
    if(count===2){
        // const clickedCards = document.getElementsByClassName("classOfclicked");
        const activeCards = document.getElementsByClassName("active")
    console.log(activeCards)
        if(activeCards[0].children[0].src !== activeCards[1].children[0].src)  {
           alert('noMatch')
            setTimeout(function(){ 
                let i=0; 
                while( i < 2){
                    activeCards[0].style.display="none";
                    activeCards[0].classList.remove("active")
                    i++;
                    
                }
                
            }, 100);
         
        }else{
            alert('match')
            setTimeout(function(){ 
                let i=0; 
                while( i < 2){
                    activeCards[0].classList.remove("active")
                    i++;   
                }
            }, 100);
        }
        count=0;
        
        //document.getElementsByClassName("active").classList.remove("active");
    }
    // else{
    //     curImgSrc = event.target.children[0].children[0].src;
    //     }
}
}






   

