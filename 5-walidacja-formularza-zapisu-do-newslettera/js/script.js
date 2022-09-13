console.log(`Warsztat - Walicacja formularza zapisu do Newslettera'a`);

let newsletterForm = document.getElementById("newsletter-form");
let allAgreeChx = document.getElementById("all-agree");

const validate = (event) => {
  let txtName = document.getElementById("name");
  let txtEmail = document.getElementById("email");
  let agree1 = document.getElementById("agree-1");
  let errors = document.getElementById("errors");

  if (txtName.value.trim() === "") {
    let liError = document.createElement("li");
    liError.innerText = "Wpisz imię i nazwisko!";

    console.log(liError);
  }

  event.preventDefault();
};

const allAgree = (event) => {
  let agree1 = document.getElementById("agree-1");
  let agree2 = document.getElementById("agree-2");

  agree1.checked = event.target.checked;
  agree2.checked = event.target.checked;

  agree1.disabled = event.target.checked;
  agree2.disabled = event.target.checked;
};

newsletterForm.addEventListener("submit", validate);
allAgreeChx.addEventListener("change", allAgree);

//30:00
