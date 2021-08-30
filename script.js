
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
// const containerCard = document.querySelectorAll('.container-cards')
// containerCard.addEventListener('click',(event) =>{
//     console.log(event);
    
// })





// console.log(cardItem)
let count = 0;
let curImgSrc = '';

const img = document.querySelector('img');
const cards = document.querySelectorAll('.card-item');
/*card0.addEventListener('click', (event) => {
    event.preventDefault();
    count++;
    console.log("clicked");
    event.target.children[0].style.display='block';
    event.target.children[0].classList.add("active");
    if(count==2){
        if(event.target.children[0].children[0].src!=curImgSrc){
            document.getElementsByClassName("active").style.display="none";
            
        }
        count=0;
        document.getElementsByClassName("active").classList.remove("active");
    }
    else{
        curImgSrc = event.target.children[0].children[0].src;
        }
   
});*/

cards.forEach(el => el.addEventListener('click', event => {
    clickHandler(event);
  }));
function clickHandler(event){
    event.preventDefault();
    count++;
    console.log("clicked");
    event.target.children[0].style.display="block";
    event.target.children[0].classList.add("active");
    if(count==2){
        const activeCards = document.getElementsByClassName("active");
    
        if(event.target.children[0].children[0].src!=curImgSrc){
            setTimeout(function(){
                
                for(let activeCard of activeCards){
                    activeCard.style.display="none";
                    activeCard.classList.remove("active");
                }
            }, 2000);
            
        }else{
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
