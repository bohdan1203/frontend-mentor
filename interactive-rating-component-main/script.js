const ratingButtons = document.querySelectorAll("button.round");
const submitButton = document.querySelector(".submit");
const rateUs = document.querySelector(".rate-us");
const thankYou = document.querySelector(".thank-you");
const span = document.querySelector("span");

let rating;

ratingButtons.forEach((button) => {
  button.addEventListener("click", function () {
    rating = this.textContent;
  });
});

submitButton.addEventListener("click", () => {
  if (!rating) {
    alert("Please, rate us!");
    return;
  }

  rateUs.classList.toggle("hidden");
  thankYou.classList.toggle("hidden");

  span.textContent = rating;
});
