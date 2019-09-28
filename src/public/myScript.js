var counter = 0;
var quotesFromAPI;
var quotesLink = window.location.href + 'api/quotes';
fetch(quotesLink)
  .then(function (response) {
    return response.json();
  })
  .then(function (myJson) {
    quotesFromAPI = myJson.quotes;
  });
var translatedFromAPI;
var translateLink = window.location.href + 'api/translated';
fetch(translateLink)
  .then(function (response) {
    return response.json();
  })
  .then(function (myJson) {
    translatedFromAPI = myJson;
  });



setTimeout(function () { 
  document.getElementById('quote').innerHTML = '"' + quotesFromAPI[counter].quote + '"';
  document.getElementById('author').innerHTML = quotesFromAPI[counter].author ;
}, 200);

setTimeout(function () { 
  document.getElementById('translatedText').innerHTML =  translatedFromAPI;
}, 500);

document.getElementById("pre").addEventListener("click", preQuote);
document.getElementById("next").addEventListener("click", nextQuote);
document.getElementById("trans").addEventListener("click", translateTheWord);

function preQuote() {
  if (counter <= 0) { // I can only get 10 quotes 
    counter = 10;
  }
  document.getElementById('quote').innerHTML = '"' + quotesFromAPI[--counter].quote + '"';
  document.getElementById('author').innerHTML =  quotesFromAPI[counter].author;
}

function nextQuote() {
  if (counter >= 9) { // I can only get 10 quotes 
    counter = -1;
  }
  document.getElementById('quote').innerHTML = '"' + quotesFromAPI[++counter].quote + '"';
  document.getElementById('author').innerHTML =  quotesFromAPI[counter].author;
  document.getElementById('tesst').innerHTML = ' ' + counter;
}

function translateTheWord() {
  window.location.reload(true);
  let tFrom = document.getElementById('transla').value;
  document.cookie = "translateFrom=" + tFrom + ";";
  document.getElementById('translatedText').innerHTML = translatedFromAPIr;
}
