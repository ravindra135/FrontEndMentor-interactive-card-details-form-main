// Required Variables
let cardFront = document.getElementById("card-front");
let cardBack = document.getElementById("card-back");

let formBtn = document.getElementById("form-btn");
let thanksBtn = document.getElementById("thanks-btn");

let formCont = document.getElementById("form-container");
let thanksCont = document.getElementById("thanks-container");

// Responsive Design Code
if (innerWidth <= 890) {
    cardFront.classList.add('card-front-mob');
    cardFront.classList.remove('card-front');
    cardBack.classList.add('card-back-mob');
    cardBack.classList.remove('card-back');
}

window.onresize = resize;

function resize()
{
    if (innerWidth <= 890) {
        cardBack.className = 'card-back-mob';
        cardFront.className = 'card-front-mob'
    } else {
        cardBack.className = 'card-back';
        cardFront.className = 'card-front'
    }
}
/*
--- Responsive Design Code Ends Here ---
*/

// Writing Input Data on Cards;
let cardName = document.getElementById("inCardName");
let cardNum = document.getElementById("inCardNum");
let cardMM = document.getElementById("inCardMM");
let cardYY = document.getElementById("inCardYY");
let cardCVC = document.getElementById("inCardYY");

let card_num = document.getElementById("card-num");
let card_owner = document.getElementById("card-owner");
let card_mm = document.getElementById("card-mm");
let card_yy = document.getElementById("card-yy");
let card_cvc = document.getElementById("cvc");

// onButton Click Listeners;
formBtn.addEventListener("click", cardInfoSubmit);
thanksBtn.addEventListener("click", cardInfoRefresh);

function cardInfoSubmit() {
    console.log('Form btn clicked');

    card_num.innerHTML = cardNum.value;
    card_owner.innerHTML = cardName.value;
    card_mm.innerHTML = cardMM.value;
    card_yy.innerHTML = cardYY.value;
    card_cvc.innerHTML = cardCVC.value;

    formCont.style.display="none";
    thanksCont.style.display="flex";
}

function cardInfoRefresh() {
    console.log('Refresh btn clicked');
    document.location.reload();
}
/*
--- onButton Click Lisiteners Code Ends Here ---
*/


