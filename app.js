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
// Inputs -
let cardName = document.getElementById("inCardName");
let cardNum = document.getElementById("inCardNum");
let cardMM = document.getElementById("inCardMM");
let cardYY = document.getElementById("inCardYY");
let cardCVC = document.getElementById("inCardCVC");
// P Tags -
let card_num = document.getElementById("card-num");
let card_owner = document.getElementById("card-owner");
let card_mm = document.getElementById("card-mm");
let card_yy = document.getElementById("card-yy");
let card_cvc = document.getElementById("cvc");

let errorName = 0,errorNum = 0,errorMM = 0,errorYY = 0,errorCVC = 0;

// onButton Click Listeners;
formBtn.addEventListener("click", validateForm); //cardInfoSubmit);
thanksBtn.addEventListener("click", cardInfoRefresh);

// Validation Before Submit
function validateForm() {

    // Name Check
    if (cardName.value == '') {
        cardName.style.borderColor = "red";
        document.getElementById("nameValid").innerHTML = "Can't be Empty";
        document.getElementById("nameValid").style.display = 'block'
        errorName++;
    } else {
        cardName.style.borderColor = '';
        document.getElementById("nameValid").style.display = 'none'
        errorName = 0;
    }

    // Number Check
    if(cardNum.value == '') {
        cardNum.style.borderColor = "red";
        document.getElementById("numValid").innerHTML = "Can't be Empty";
        document.getElementById("numValid").style.display = 'block'
        errorNum++;
    } else if(isNaN(cardNum.value)) {
        cardNum.style.borderColor = "red";
        document.getElementById("numValid").innerHTML = "Only Numbers";
        document.getElementById("numValid").style.display = 'block'
        errorNum++;
    } else if(cardNum.value.length < 16 ) {
        cardNum.style.borderColor = "red";
        document.getElementById("numValid").innerHTML = "Invalid Card Number";
        document.getElementById("numValid").style.display = 'block'
        errorNum++;
    } else {
        cardNum.style.borderColor = '';
        document.getElementById("numValid").style.display = 'none'
        errorNum = 0;
    }

    // Month Check
    if(cardMM.value == '') {
        cardMM.style.borderColor = "red";
        document.getElementById("expValid").innerHTML = "Can't be Empty";
        document.getElementById("expValid").style.display = 'block'
        errorMM++;
    } else if(cardMM.value.length < 2 ) {
        cardMM.style.borderColor = "red";
        document.getElementById("expValid").innerHTML = "Check Expiry Date";
        document.getElementById("expValid").style.display = 'block'
        errorMM++;
    } else if(cardMM.value == 00 || cardMM.value < 01 || cardMM.value > 12) {
        cardMM.style.borderColor = "red";
        document.getElementById("expValid").innerHTML = "MM range is 01 - 12";
        document.getElementById("expValid").style.display = 'block'
        errorMM++
    } else {
        cardMM.style.borderColor = '';
        document.getElementById("expValid").style.display = 'none'
        errorMM = 0;
    }

    // Year Check
    if(cardYY.value == ''){
        cardYY.style.borderColor = "red";
        document.getElementById("expValid").innerHTML = "Can't be Empty";
        document.getElementById("expValid").style.display = 'block'
        errorYY++;
    } else if(cardYY.value.length < 2){
        cardYY.style.borderColor = "red";
        document.getElementById("expValid").innerHTML = "Check Expiry Date";
        document.getElementById("expValid").style.display = 'block'
        errorYY++;
    } else {
        cardYY.style.borderColor = "";
        errorYY = 0;
    }

    // CVC Check
    if(cardCVC.value == '') {
        cardCVC.style.borderColor = "red";
        document.getElementById("cvcValid").innerHTML = "Can't be Empty";
        document.getElementById("cvcValid").style.display = 'block'
        errorCVC++;
    } else if(cardCVC.value.length < 3) {
        cardCVC.style.borderColor = "red";
        document.getElementById("cvcValid").innerHTML = "Invalid CVC";
        document.getElementById("cvcValid").style.display = 'block'
        errorCVC++;
    } else {
        cardCVC.style.borderColor = "";
        document.getElementById("cvcValid").style.display = 'none'
        errorCVC = 0;
    }

    // Checking If Form Have Any Errors;
    let formErrors = errorName + errorNum + errorMM + errorYY + errorCVC;
    console.log(formErrors);

    if (formErrors == 0) {
        cardInfoSubmit();
    }

}

//V.2 - Realtime Update;
function cardNumUpdate() {
    // Code Snippet to add Space after 4 characters in Number;
    let dummy = cardNum.value;
    let numMod =dummy.match(/.{1,4}/g);
    card_num.innerHTML = numMod.join(' ');
    // console.log(numMod.join(' '));
}

function cardNameUpdate() {
    card_owner.innerHTML = cardName.value;
}

function cardMMUpdate() {
    card_mm.innerHTML = cardMM.value;
}

function cardYYUpdate() {
    card_yy.innerHTML = cardYY.value;
}

function cardCVCUpdate() {
    card_cvc.innerHTML = cardCVC.value;
}

function cardInfoSubmit() {
    // console.log('Form btn clicked');

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


