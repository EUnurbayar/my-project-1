
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




let cardsAll ={
    pairedCardNum: 6,
    images:[{'0': "url('https://i.pinimg.com/736x/0d/e9/85/0de98599900eec628cf6c6ce8746de92.jpg')",
    '1':"url('https://media.giphy.com/media/JRE3AvLsSRXg360F6l/giphy.gif')",
   '2': "url(''https://thumbs.dreamstime.com/b/cute-golden-retriever-red-scarf-isolated-yellow-background-cute-golden-retriever-red-scarf-isolated-yellow-214233088.jpg)",
   '3': "url('https://i.pinimg.com/564x/51/91/84/519184a8e3424daa2a1520149f5ef3f1.jpg')",
   '4': "url('https://comparic.pl/wp-content/uploads/2020/04/Black_Swam.jpg')",
    '5': "url('http://shappa.eu/wp-content/uploads/2021/01/dogs-2-scaled.jpg')"
    }]
}
//  console.log(cards)


 function render () {
    let locArray = [];
        while (locArray.length < (cardsAll.pairedCardNum * 2)) {
            let loc = Math.floor(Math.random() * cards.pairedCardNum * 2);
            if (!locArray.includes(loc)) {
                locArray.push(loc);
            }
        }
        let locArrayPairs = [];
        for (let i = 0; i < 12; i += 2) {
            let pair = []
            pair.push(locArray[i]);
            pair.push(locArray[i+1]);
            locArrayPairs.push(pair);
        }
        for (let i = 0; i < this.pairedCardNum; i++) {
            this.images[i].matchPair = locArrayPairs[i];
        }
    }

   

    const reset = document.getElementsByClassName('reset')
    // console.log(reset)
    reset.addEventListener('click', render)
