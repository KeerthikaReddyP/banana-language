var serverURL="https://api.funtranslations.com/translate/minion.json";

var input=document.querySelector("#inputTxt");
var output=document.querySelector("#outputTxt");
var btn=document.querySelector("#btn-translate");


function url(text){
    return serverURL+"?"+"text="+text;
}

function errorHandler(error){
    console.log("error occured: "+error);
    var err=document.querySelector("#aside");
    err.style.display="block";
}

function translate(){
    fetch(url(input.value))
        .then(response=>response.json())
        .then(
            json=>
            output.innerHTML=json.contents.translated
        )
        .catch(errorHandler);
}


btn.addEventListener("click",translate);