// =====================================
// FINEXA.exchange
// WhatsApp Exchange Request System
// =====================================


const whatsappNumber = "526732304964";



document
.getElementById("exchangeButton")
.addEventListener("click", function () {



    const fromAsset =
    document.getElementById("fromAsset").value;



    const amount =
    document.getElementById("amount").value;



    const toAsset =
    document.getElementById("toAsset").value;



    const country =
    document.getElementById("country").value;






    if (
        fromAsset === "" ||
        amount === "" ||
        toAsset === "" ||
        country === ""
    ) {


        alert(
        "Please complete all fields before requesting an exchange."
        );


        return;


    }







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







    const whatsappURL =

    "https://wa.me/"
    + whatsappNumber
    + "?text="
    + encodeURIComponent(message);






    window.open(
        whatsappURL,
        "_blank"
    );



});
