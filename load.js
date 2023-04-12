

const formTag = document.querySelector(".form");

formTag.addEventListener("submit", (event) => {
  event.preventDefault();

  let formData = new formData(formTag);
  console.log(formData);
  const data = new URLSearchParams(formData);

  fetch(`https://reqres.in/api/user`, {
    method: `POST`,

    body: data,
  });
});