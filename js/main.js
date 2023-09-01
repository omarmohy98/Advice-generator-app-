let idEle = document.querySelector("h1 span");
let quoteEle = document.querySelector("q");
let generateNewQuoteEle = document.querySelector(".icon");

// get random advice from api
async function getDataFromApi(apiLink) {
  try {
    let response = await fetch(apiLink);
    return await response.json();
  } catch (err) {
    throw new Error(err);
  }
}

// display Quote in page
function display() {
  getDataFromApi("https://api.adviceslip.com/advice").then((data) => {
    idEle.innerHTML = data.slip.id;
    quoteEle.innerHTML = data.slip.advice;
  });
}

// generate New quote when dice icon clicked
generateNewQuoteEle.addEventListener("click", display);
