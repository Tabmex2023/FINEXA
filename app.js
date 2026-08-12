// =====================================
// FINEXA.exchange
// WhatsApp Exchange Request System
// =====================================


// FINEXA WhatsApp Number
const whatsappNumber = "526732304964";




// Button Event

document
.getElementById("exchangeButton")
.addEventListener("click", function(){



    // Get values

    const fromAsset =
    document.getElementById("fromAsset").value;



    const amount =
    document.getElementById("amount").value;



    const toAsset =
    document.getElementById("toAsset").value;



    const country =
    document.getElementById("country").value;






    // Validation


    if(
        fromAsset === "" ||
        paymentMethod === "" ||
        amount === "" ||
        toAsset === "" ||
        country === ""
    ){


        alert(
        "Please complete all fields before requesting an exchange."
        );


        return;


    }







    // Create WhatsApp Message


    const message =

`Hello FINEXA,

I would like to request an exchange.

FROM:
${amount} ${fromAsset}

TO:
${toAsset}

Location:
${country}


Please send me your current exchange offer and further instructions.

Thank you.`;







    // Create WhatsApp URL


    const whatsappURL =

    "https://wa.me/"
    + whatsappNumber
    + "?text="
    + encodeURIComponent(message);







    // Open WhatsApp


    window.open(
        whatsappURL,
        "_blank"
    );



});
