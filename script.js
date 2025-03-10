const westherForm = document.querySelecter(".weatherForm");
const cityInput = document.querySelecter(".cityInput");
const card = document.querySelector(".card");
const apiKey = "ca85c5540d115d3fc3a3d1f3a9a22c35";

weatherForm.addEventlistener("submit", event =>{

    event.preventDefalut();

    const city = cityInput.value;

    if(city){

    }
    else{
        displayError("please enter a city");
    }
    
});

async function getWeatherData(){

}

function dispalyweatherInfo(data){

}

function displayError(message){
    const errorDispaly = document.createElement("p");
    errorDispaly.textContent = message;
    errorDiplay.classlist.add("errorDispaly");

    card.textContent = "";
    card.computedStyleMap.dispaly = "flex";
    card.appendChild(errorDisplay);

}
