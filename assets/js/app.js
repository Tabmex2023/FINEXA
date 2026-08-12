// FINEXA.exchange
// Main Application Script


let assets = [];
let rates = {};
let methods = [];
let countries = [];
let whatsapp = {};




// Load JSON files

async function loadData() {


    try {


        const assetsResponse = await fetch("assets/data/assets.json");
        assets = await assetsResponse.json();



        const ratesResponse = await fetch("assets/data/rates.json");
        rates = await ratesResponse.json();



        const methodsResponse = await fetch("assets/data/methods.json");
        methods = await methodsResponse.json();



        const countriesResponse = await fetch("assets/data/countries.json");
        countries = await countriesResponse.json();



        const whatsappResponse = await fetch("assets/data/whatsapp.json");
        whatsapp = await whatsappResponse.json();



        populateAssets();

        populateMethods();

        populateCountries();



    } catch(error) {


        console.error(
            "FINEXA data loading error:",
            error
        );


    }

}






// Fill Asset Dropdowns

function populateAssets(){


    const fromAsset =
    document.getElementById("fromAsset");


    const toAsset =
    document.getElementById("toAsset");



    assets.forEach(asset => {



        let option1 =
        document.createElement("option");


        option1.value =
        asset.symbol;


        option1.textContent =
        asset.name + " (" + asset.symbol + ")";



        fromAsset.appendChild(option1);




        let option2 =
        document.createElement("option");


        option2.value =
        asset.symbol;


        option2.textContent =
        asset.name + " (" + asset.symbol + ")";



        toAsset.appendChild(option2);



    });


}








// Fill Payment Methods

function populateMethods(){


    const method =
    document.getElementById("fromMethod");



    methods.forEach(item => {



        let option =
        document.createElement("option");


        option.value =
        item.name;


        option.textContent =
        item.name;



        method.appendChild(option);



    });



}








// Fill Countries

function populateCountries(){


    const country =
    document.getElementById("country");



    countries.forEach(item => {



        let option =
        document.createElement("option");



        option.value =
        item.name;


        option.textContent =
        item.name;



        country.appendChild(option);



    });



}









// Calculate Exchange

function calculateExchange(){


    let from =
    document.getElementById("fromAsset").value;



    let to =
    document.getElementById("toAsset").value;



    let amount =
    Number(
        document.getElementById("amount").value
    );



    const receive =
    document.getElementById("receiveAmount");



    const rateDisplay =
    document.getElementById("exchangeRate");





    if(
        !from ||
        !to ||
        !amount
    ){

        receive.value = "";

        rateDisplay.innerHTML =
        "Waiting for selection...";


        return;

    }







    if(
        rates[from] &&
        rates[from][to]
    ){



        let rate =
        rates[from][to];



        let result =
        amount * rate;



        receive.value =
        result.toFixed(8)
        + " "
        + to;



        rateDisplay.innerHTML =
        "1 "
        + from
        + " = "
        + rate
        + " "
        + to;



    }

    else {


        receive.value =
        "Exchange unavailable";



        rateDisplay.innerHTML =
        "Rate not available";


    }


}









// Create WhatsApp Message

function openWhatsApp(){



    let from =
    document.getElementById("fromAsset").value;



    let method =
    document.getElementById("fromMethod").value;



    let amount =
    document.getElementById("amount").value;



    let to =
    document.getElementById("toAsset").value;



    let receive =
    document.getElementById("receiveAmount").value;



    let country =
    document.getElementById("country").value;





    let message =

`Hello FINEXA,

I would like to make an exchange.

FROM:
${amount} ${from}

Payment Method:
${method}

TO:
${to}

Estimated Receive:
${receive}

Location:
${country}

Please confirm my exchange.`;





    let url =

    "https://wa.me/"
    + whatsapp.number
    + "?text="
    + encodeURIComponent(message);



    window.open(
        url,
        "_blank"
    );


}









// Event Listeners


document.addEventListener(
"DOMContentLoaded",
function(){



    loadData();




    document
    .getElementById("amount")
    .addEventListener(
        "input",
        calculateExchange
    );



    document
    .getElementById("fromAsset")
    .addEventListener(
        "change",
        calculateExchange
    );



    document
    .getElementById("toAsset")
    .addEventListener(
        "change",
        calculateExchange
    );



    document
    .getElementById("exchangeButton")
    .addEventListener(
        "click",
        openWhatsApp
    );



});
