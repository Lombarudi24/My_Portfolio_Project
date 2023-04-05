const button = document.querySelector(".dropbtn");
const div = document.querySelector(".dropdown-content");

const callParam = () => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "aa8edd7191mshee328997db07344p1af3f5jsna738891782b5",
      "X-RapidAPI-Host": "crypto-news16.p.rapidapi.com",
    },
  };

  fetch("https://crypto-news16.p.rapidapi.com/news/coinjournal", options)
    .then((response) => response.json())
    .then((getttingData) => {
      for (i = 0; i < getttingData.length; i++) {
        let element = getttingData[i];
        const article = document.querySelector("article");
        article.innerHTML = ` <h2>${element.title}</h2> <p> ${element.description} </p> `;
      }
    })
   .catch(catchError)
};
button.addEventListener("click", callParam);

// Search players, teams and tournaments.
// const dropdown = (addDropDownContent) => {
//     const day = document.querySelectorAll(".day")
//     dropInput.append(day).innerHTML
// };

// function myFunction() {
//   var x = document.getElementById("myDIV");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }
function catchError(error) {
  const formError = document.querySelector("form");

  const pTag = document.createElement("p");
  pTag.textContent = "Something went wrong!";

  const errorMessage = document.createElement("p");
  errorMessage.classList.add("error-message");
  errorMessage.textContent = error;

  formError.append(pTag, errorMessage);
}