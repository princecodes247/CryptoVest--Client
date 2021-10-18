let pricings = document.querySelectorAll(".price-table");

pricings.forEach((pricing) => {
  pricing.addEventListener("click", () => {
    pricings.forEach((pricing) => {
      pricing.classList.remove("selected");
      pricing.classList.add("unselected");
    });
    pricing.classList.remove("unselected");
    pricing.classList.add("selected");
  });
});
