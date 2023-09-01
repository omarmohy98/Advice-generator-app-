let idEle = document.querySelector("h1 span");
let quoteEle = document.querySelector("q");
let generateNewQuoteEle = document.querySelector(".icon");

// get random advice from api
async function getDataFromApi(apiLink) {
  try {
    let response = await fetch(apiLink);
    let data = await response.json();
    idEle.innerHTML = data.slip.id;
    quoteEle.innerHTML = data.slip.advice;
  } catch (err) {
    throw new Error(err);
  }
}

getDataFromApi("https://api.adviceslip.com/advice");

// generate New quote when dice icon clicked
generateNewQuoteEle.addEventListener("click", () => {
  getDataFromApi("https://api.adviceslip.com/advice");
});
