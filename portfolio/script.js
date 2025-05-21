function toggleCard(cardElement) {
    const para = cardElement.querySelector("p");
    if (para.classList.contains("hidden")) {
      para.classList.remove("hidden");
    } else {
      para.classList.add("hidden");
    }
  }
  