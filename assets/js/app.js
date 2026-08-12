// =================================
// FINEXA.exchange
// Exchange Calculator Logic
// =================================


const amountInput = document.querySelector(
    'input[type="number"]'
);


const receiveInput = document.querySelector(
    'input[disabled]'
);


const fromSelect = document.querySelectorAll(
    "select"
)[0];


const paymentSelect = document.querySelectorAll(
    "select"
)[1];


const toSelect = document.querySelectorAll(
    "select"
)[2];



// Demo Preise
// Später ersetzen durch API

const prices = {

    EUR: {
        BTC: 0.0000097,
        ETH: 0.00028,
        USDT: 1.08,
        USD: 1.08
    },


    USD: {
        BTC: 0.0000094,
        ETH: 0.00027,
        USDT: 1
    },


    MXN: {
        BTC: 0.0000005,
        ETH: 0.000015,
        USDT: 0.052
    }

};





function calculateExchange(){


let amount =
parseFloat(amountInput.value);



if(isNaN(amount)){

receiveInput.value="";

return;

}



let from =
fromSelect.value.substring(0,3);



let to =
toSelect.value.substring(0,3);




if(
prices[from] &&
prices[from][to]
){


let result =
amount * prices[from][to];



receiveInput.value =
result.toFixed(8)
+ " "
+ to;



}

else {


receiveInput.value =
"Rate unavailable";


}



}




amountInput.addEventListener(
"input",
calculateExchange
);


fromSelect.addEventListener(
"change",
calculateExchange
);


toSelect.addEventListener(
"change",
calculateExchange
);
